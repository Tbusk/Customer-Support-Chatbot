package edu.ferris.seng355.tbusk.final_project.exception_handling;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;


/*
 * This class handles exceptions thrown by the application.
 * It catches all exceptions and returns a generic error message with a 400 Bad Request status.
 */
@RestControllerAdvice
public class AppExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(AppExceptionHandler.class);

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(Exception.class)
    public String handleException(Exception e) {
        log.error(e.getMessage());
        return "The request could not be processed due to an error: " + e.getMessage();
    }

}
