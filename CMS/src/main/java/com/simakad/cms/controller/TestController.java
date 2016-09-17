package com.simakad.cms.controller;

import com.simakad.dao.repo.Student;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
//@RestController
@Controller
public class TestController {
    @RequestMapping(value = "/test")
    public String cetak(Model model) {
        Student student = new Student();
        student.setName("kovan");
        student.setAddress("cengkareng");
        model.addAttribute(student);
        return "layout/nosidebar";
    }

    @RequestMapping(value = "")
    public String index(Model model) {
        return "layout/master";
    }
}
