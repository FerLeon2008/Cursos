package com.PracticaPropuesta1.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PalindromoController {
    
    @GetMapping("/validarPalindromo/{palabra}")
    public String Palindromo(@PathVariable String palabra){
        if(isPalindrome(palabra)){
            return "La palabra " + palabra + " es un palindromo";
        }else{
            return "La palabra " + palabra + " NO es un palindromo";
        }
    }
    
    private boolean isPalindrome(String palindromo){
        int length = palindromo.length();
        for (int i = 0; i < length/2; i++) {
            if(palindromo.charAt(i) != palindromo.charAt(length-(1+i))){
                return false;
            }
        }
        return true;
    }
}
