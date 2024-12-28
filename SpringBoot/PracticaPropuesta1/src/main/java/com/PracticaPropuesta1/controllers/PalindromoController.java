package com.PracticaPropuesta1.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
/*
    controlador par verificar palindromos
 */
@RestController
public class PalindromoController {
    /**
     * EndPoint para verificar si la palabra es un palindromo
     * @param palabra (Palabra a verificar)
     * @return Un mensaje indicando si la palabra es un palindromo o no
     */
    @GetMapping("/validarPalindromo/{palabra}")
    public String Palindromo(@PathVariable String palabra){
        if(isPalindrome(palabra)){
            return "La palabra " + palabra + " es un palindromo";
        }else{
            return "La palabra " + palabra + " NO es un palindromo";
        }
    }

    /**
     * Método para verificar si la palabra es un palindromo
     * @param palabra (recibe la cadena de texto y la verifica)
     * @return false, si no es palindromo, y true, si es palindromo
     */
    private boolean isPalindrome(String palabra){
        int length = palabra.length();
        for (int i = 0; i < length/2; i++) {
            if(palabra.charAt(i) != palabra.charAt(length-(1+i))){
                return false;
            }
        }
        return true;
    }
}
