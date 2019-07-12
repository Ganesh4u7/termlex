package com.noesisinformatica.web;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.noesisinformatica.test.*;

public class App {

    public static void main( String[] args )
    {
        DataService dataService = new DataService();
        dataService.saveTerm("Term from app 2");
        
        
        System.out.println( "Number of terms : "+ dataService.getAllTerm().size());
       
    }
}