package com.recycle.recycleapp.controllers;

import com.google.cloud.dialogflow.v2.WebhookRequest;
import com.google.cloud.dialogflow.v2.WebhookResponse;
import com.google.protobuf.Struct;
import com.google.protobuf.Value;
import com.recycle.recycleapp.dtos.RecycleCenterDTO;
import com.recycle.recycleapp.services.RecycleCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/dialogflow")
public class DialogflowController {

    private final RecycleCenterService recycleCenterService;

    @Autowired
    public DialogflowController(RecycleCenterService recycleCenterService) {
        this.recycleCenterService = recycleCenterService;
    }

    @PostMapping("/webhook")
    public WebhookResponse handleDialogflowWebhook(@RequestBody WebhookRequest request) {
        Struct body = request.getQueryResult().getParameters();
        Map<String, Value> fields = body.getFieldsMap();
        String intentName = request.getQueryResult().getIntent().getDisplayName();
        String response;

        switch (intentName) {
            case "Greeting":
                response = "¡Hola! Soy ReCycleBot ¿En qué puedo ayudarte hoy?";
                break;
            case "FindCollectionCenters":
                response = "Claro, ¿podrías decirme en qué ciudad te encuentras?";
                break;
            case "FindCollectionCenters1":
                String city = getParameter(fields, "city");
                response = getCollectionCentersResponse(city);
                break;
            case "HowToRecycle":
                response = "Para empezar a reciclar desechos electrónicos, asegúrate de separar tus dispositivos como teléfonos, laptops, baterías, etc. Luego, lleva estos dispositivos a un centro de acopio especializado en desechos electrónicos. Puedes consultar nuestra guía de reciclaje en nuestro sitio web para más detalles.";
                break;
            case "UsePoints":
                response = "Puedes utilizar tus puntos para obtener descuentos en tiendas participantes. Solo necesitas presentar tu dni en el comercio participante al momento de la compra. Visita nuestro sitio web para más detalles sobre cómo utilizar tus puntos.";
                break;
            case "PointsPromotions":
                response = "Las promociones actuales incluyen un 20% de descuento en tiendas Organic Oasis y RecycleWear Boutique por cada 100 puntos canjeados. ¡Aprovecha estas ofertas mientras duren! Puedes ver todas las promociones actuales en nuestra página de promociones.";
                break;
            case "RedeemPoints":
                response = "Puedes canjear tus puntos en los siguientes comercios: Tienda Walmart, Tienda Costco, y Tienda Target. Cada comercio ofrece diferentes tipos de descuentos y promociones. Revisa nuestra página web para más detalles.";
                break;
            case "TalkToAgent":
                response = "Un agente estará disponible para ayudarte en breve. Por favor espera un momento o si lo prefieres, puedes enviar un correo electrónico a contact@recycle.com para asistencia inmediata.";
                break;
            default:
                response = "Lo siento, no entendí tu solicitud.";
                break;
        }

        return createResponse(response);
    }

    private String getCollectionCentersResponse(String city) {
        List<RecycleCenterDTO> recycleCenters = recycleCenterService.findByCity(city);
        if (recycleCenters.isEmpty()) {
            return "Lo siento, no se encontraron centros de acopio en tu ciudad.";
        }

        return recycleCenters.stream()
                .map(center -> String.format("Centro: %s, Dirección: %s, Horarios: %s", center.getName(), center.getAddress().getCity(), center.getBusinessHours()))
                .collect(Collectors.joining("\n"));
    }

    private String getParameter(Map<String, Value> fields, String parameterName) {
        return fields.get(parameterName).getStringValue();
    }

    private  WebhookResponse createResponse(String message) {
        return WebhookResponse.newBuilder()
                .setFulfillmentText(message)
                .build();
    }
}

