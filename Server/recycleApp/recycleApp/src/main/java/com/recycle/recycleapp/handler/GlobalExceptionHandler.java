package com.recycle.recycleapp.handler;

import com.recycle.recycleapp.exceptions.OrganizationNotFoundException;
import com.recycle.recycleapp.exceptions.PersonNotFoundException;
import com.recycle.recycleapp.exceptions.RecycleCenterNotFoundException;
import com.recycle.recycleapp.exceptions.WasteNotFoundException;
import com.recycle.recycleapp.utils.Response;
import jakarta.persistence.EntityNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.HibernateException;
import org.hibernate.QueryTimeoutException;
import org.hibernate.service.spi.ServiceException;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.dao.DataAccessResourceFailureException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authorization.AuthorizationDeniedException;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.sql.SQLIntegrityConstraintViolationException;
import java.sql.SQLWarning;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static com.recycle.recycleapp.handler.BusinessErrorCodes.*;
import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.UNAUTHORIZED;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    private ResponseEntity<Object> buildErrorResponse(List<String> errorMessages, Throwable ex, HttpStatus status) {
        String debugMessage = ex.getCause() != null ? ex.getCause().getMessage() : ex.getMessage();
        Response response = new Response(false, status, errorMessages, debugMessage);
        return new ResponseEntity<>(response, status);
    }

    @ExceptionHandler({
            PersonNotFoundException.class,
            RecycleCenterNotFoundException.class,
            WasteNotFoundException.class,
            OrganizationNotFoundException.class
    })
    public ResponseEntity<Object> handleCustomExceptions(Exception ex) {
        List<String> errorMessages = List.of(ex.getMessage());
        HttpStatus status = HttpStatus.NOT_FOUND;

        return buildErrorResponse(errorMessages, ex, status);
    }

    @ExceptionHandler(LockedException.class)
    public ResponseEntity<Object> handleLockedException(LockedException exp) {
        return buildErrorResponse(
                List.of(BusinessErrorCodes.ACCOUNT_LOCKED.getDescription()),
                exp,
                BusinessErrorCodes.ACCOUNT_LOCKED.getHttpStatus()
        );
    }

    @ExceptionHandler(DisabledException.class)
    public ResponseEntity<Object> handleDisabledException(DisabledException exp) {
        return buildErrorResponse(
                List.of(BusinessErrorCodes.ACCOUNT_DISABLED.getDescription()),
                exp,
                BusinessErrorCodes.ACCOUNT_DISABLED.getHttpStatus()
        );
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<Object> handleBadCredentialsException(BadCredentialsException exp) {
        return buildErrorResponse(
                List.of(BusinessErrorCodes.BAD_CREDENTIALS.getDescription()),
                exp,
                BusinessErrorCodes.BAD_CREDENTIALS.getHttpStatus()
        );
    }

    @ExceptionHandler(OperationNotPermittedException.class)
    public ResponseEntity<Object> handleOperationNotPermittedException(OperationNotPermittedException exp) {
        return buildErrorResponse(
                List.of("Operación no permitida"),
                exp,
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(AuthorizationDeniedException.class)
    public ResponseEntity<Object> handleAuthorizationDeniedException(AuthorizationDeniedException exp) {
        return buildErrorResponse(
                List.of("No tiene permisos para realizar esta acción"),
                exp,
                HttpStatus.FORBIDDEN
        );
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleMethodArgumentNotValidException(MethodArgumentNotValidException exp) {
        List<String> errors = exp.getBindingResult().getAllErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .toList();
        return buildErrorResponse(errors, exp, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<Object> handleDataIntegrityViolation(DataIntegrityViolationException ex) {
        List<String> errorMessages = new ArrayList<>();
        Throwable rootCause = ex.getRootCause();

        String detailedErrorMessage = "";

        if (rootCause instanceof SQLIntegrityConstraintViolationException) {
            SQLIntegrityConstraintViolationException sqlEx = (SQLIntegrityConstraintViolationException) rootCause;
            int errorCode = sqlEx.getErrorCode();

            switch (errorCode) {
                case 1062: // MySQL error code for duplicate entry
                    errorMessages.add("Ya existe un registro con el valor ingresado. Por favor, verifica tus datos e intenta nuevamente.");
                    detailedErrorMessage = "Error de entrada duplicada en la base de datos";
                    break;
                case 1451: // MySQL error code for foreign key constraint violation
                    errorMessages.add("No se puede eliminar o actualizar este registro en estos momentos. Por favor, inténtalo nuevamente más tarde.");
                    detailedErrorMessage = "Violación de restricción de clave externa en la base de datos";
                    break;
                case 1406: // MySQL error code for data too long for column
                    errorMessages.add("Los datos ingresados son demasiado largos. Por favor, acorta la entrada e intenta nuevamente.");
                    detailedErrorMessage = "Datos demasiado largos para columna en la base de datos";
                    break;
                default:
                    errorMessages.add("Ha ocurrido un error. Por favor, inténtalo nuevamente más tarde");
                    detailedErrorMessage = "Error de integridad de datos en la base de datos";
                    break;
            }
        } else if (rootCause instanceof DataAccessResourceFailureException) {
            errorMessages.add("Ha ocurrido un error. Por favor, inténtalo nuevamente más tarde.");
            detailedErrorMessage = "Error de acceso a datos en la base de datos";
        } else if (rootCause instanceof QueryTimeoutException) {
            errorMessages.add("El tiempo de espera para la consulta ha expirado. Por favor, inténtalo nuevamente más tarde.");
            detailedErrorMessage = "Expiración del tiempo de espera de la consulta en la base de datos";
        } else if (rootCause instanceof SQLWarning) {
            errorMessages.add("Se ha producido un error al procesar la solicitud. Por favor, inténtalo nuevamente más tarde.");
            detailedErrorMessage = "Advertencia de SQL en la base de datos: " + rootCause.getMessage();
        } else if (rootCause instanceof HibernateException) {
            errorMessages.add("Se ha producido un error interno en el sistema. Por favor, inténtalo nuevamente más tarde o contacta al soporte técnico para obtener ayuda.");
            detailedErrorMessage = "Error interno de Hibernate: " + rootCause.getMessage();
        } else {
            errorMessages.add("Ha ocurrido un error al procesar la solicitud. Por favor, inténtalo nuevamente más tarde.");
            detailedErrorMessage = "Error desconocido en la base de datos";
        }

        //log.error("Error de base de datos: " + detailedErrorMessage, ex);

        return buildErrorResponse(errorMessages, ex, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NoHandlerFoundException.class)
    public ResponseEntity<Object> handleNoHandlerFoundException(NoHandlerFoundException ex) {
        //log.error("Recurso no encontrado: {}", ex.getRequestURL(), ex);
        List<String> errorMessages = List.of("El recurso solicitado no se encontró: " + ex.getRequestURL());

        return buildErrorResponse(errorMessages, ex, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<Object> handleNoResourceFoundException(NoResourceFoundException ex) {
        //log.error("Recurso no encontrado: {}", ex.getResourcePath(), ex);
        List<String> errorMessages = List.of("El recurso solicitado no se encontró: " + ex.getResourcePath());

        return buildErrorResponse(errorMessages, ex, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<Object> handleEntityNotFoundException(EntityNotFoundException ex) {
        //log.error("Entidad no encontrada: {}", ex.getMessage(), ex);
        List<String> errorMessages = List.of(ex.getMessage());

        return buildErrorResponse(errorMessages, ex, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(TransactionSystemException.class)
    public ResponseEntity<Object> handleTransactionSystemException(TransactionSystemException ex) {
        //log.error("Error de sistema de transacciones: {}", ex.getRootCause().getMessage(), ex);
        List<String> errorMessages = List.of("Error al procesar la operación");

        return buildErrorResponse(errorMessages, ex, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(ServiceException.class)
    public ResponseEntity<Object> handleServiceException(ServiceException ex) {
        //log.error("Error en el servicio: {}", ex.getMessage(), ex);
        List<String> errorMessages = List.of("Estamos experimentando problemas técnicos. Por favor, inténtalo nuevamente más tarde.");

        return buildErrorResponse(errorMessages, ex, HttpStatus.SERVICE_UNAVAILABLE);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleException(Exception exp) {
        exp.printStackTrace();
        return buildErrorResponse(
                List.of("Internal error, please contact the admin"),
                exp,
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }
}
