package com.bc36gc.applyjob.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class JobNotFoundException extends Exception {
  public JobNotFoundException() {}

  public JobNotFoundException(String message) {
    super(message);
  }
}
