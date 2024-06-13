package com.recycle.recycleapp.handler;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.HttpStatus.NOT_IMPLEMENTED;

public enum BusinessErrorCodes {
    NO_CODE(0, HttpStatus.NOT_IMPLEMENTED, "Sin código"),
    INCORRECT_CURRENT_PASSWORD(300, HttpStatus.BAD_REQUEST, "La contraseña actual es incorrecta"),
    NEW_PASSWORD_DOES_NOT_MATCH(301, HttpStatus.BAD_REQUEST, "La nueva contraseña no coincide"),
    ACCOUNT_LOCKED(302, HttpStatus.FORBIDDEN, "La cuenta de usuario está bloqueada"),
    ACCOUNT_DISABLED(303, HttpStatus.FORBIDDEN, "La cuenta de usuario está deshabilitada"),
    BAD_CREDENTIALS(304, HttpStatus.FORBIDDEN, "El inicio de sesión y/o la contraseña son incorrectos"),

    ;

    @Getter
    private final int code;
    @Getter
    private final String description;
    @Getter
    private final HttpStatus httpStatus;

    BusinessErrorCodes(int code, HttpStatus status, String description) {
        this.code = code;
        this.description = description;
        this.httpStatus = status;
    }
}