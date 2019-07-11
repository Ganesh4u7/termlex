package com.noesisinformatica.web;

import com.noesisinformatica.test.*;

/**
 * Hello world!
 *
 */
public class App {

    public static void main( String[] args )
    {
        DataService dataService = new DataService();
        dataService.saveTerm("Another term 1");
        System.out.println( "Number of terms : " + dataService.getAllTerm().size());
    }
}