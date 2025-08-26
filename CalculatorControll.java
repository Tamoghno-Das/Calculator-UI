package com.example.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CalculatorControll {

    @GetMapping("/sum/{num1}/{num2}")
    public String Addition(@PathVariable double num1, @PathVariable double num2) {
        return String.valueOf(num1 + num2);
    }

    @GetMapping("/sub/{num1}/{num2}")
    public String Substraction(@PathVariable double num1, @PathVariable double num2) {
        return String.valueOf(num1 - num2);
    }

    @GetMapping("/mul/{num1}/{num2}")
    public String Multiplication(@PathVariable double num1, @PathVariable double num2) {
        try{
            if (num2 == 0 || num1 == 0) {
                return "0";
            }
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
        return String.valueOf(num1 * num2);
    }


    @GetMapping("/div/{num1}/{num2}")
    public String Division(@PathVariable double num1, @PathVariable double num2) {
        try{
            if (num2 == 0 || num1 == 0) {
                return "0";
            }
        }
        catch (ArithmeticException e) {
            throw new RuntimeException("Division by zero");
        }
        return String.valueOf(num1 / num2);
    }





}
