package com.stackroute.sbservice.controller;

import com.stackroute.sbservice.exception.UserAlreadyExistsException;
import com.stackroute.sbservice.exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.stackroute.sbservice.domain.User;
import com.stackroute.sbservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "*")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    //registerUser method is to perform create operation
    @PostMapping("/user")
    public ResponseEntity<?> registerUser(@RequestBody User user) throws UserAlreadyExistsException {
        return new ResponseEntity<>(userService.registerUser(user), HttpStatus.CREATED);
    }

    //updateUser method is to perform update operation
    @PutMapping("/user")
    public ResponseEntity<?> updateUser(@RequestBody User user) throws UserNotFoundException {
        return new ResponseEntity<>(userService.updateProfile(user), HttpStatus.OK);
    }

    //listAllUsers method is to perform read operation
    @GetMapping
    public ResponseEntity<?> listAllUsers() {
        return new ResponseEntity<>(userService.listAllUsers(), HttpStatus.OK);
    }

}