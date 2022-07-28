package com.bc36gc.company.exception;


public class CompanyNotFoundException extends RuntimeException {
    public CompanyNotFoundException(String message) {
           super(message);
    }
}
