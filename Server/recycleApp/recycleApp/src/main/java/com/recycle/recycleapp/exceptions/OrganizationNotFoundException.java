package com.recycle.recycleapp.exceptions;

public class OrganizationNotFoundException extends RuntimeException {
    public OrganizationNotFoundException(String message) {
        super(message);
    }
}
