package com.simakad.cms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.bind.annotation.RestController;

/**
 * Created by HighDream on 9/11/2016.
 */

/*
Note : comment rest controller annotation
and uncomment controller annotate after implement thymeleaf !!
This is just for example !
 */
@RestController
//@Controller
public class TestController {
    @RequestMapping(value = "/test")
    public String cetak() {
        return "Kovan's here !!";
    }
}
