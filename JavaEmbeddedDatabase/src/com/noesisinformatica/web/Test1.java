package com.noesisinformatica.web;

import com.noesisinformatica.test.*;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class Test1 {

	@Test
	void test() {
		 DataService dataService = new DataService();
		 
		 int termInDataService = dataService.getAllTerm().size();
	        System.out.println( "Number of terms : " + termInDataService);
	        assert termInDataService > 0;
		 
	}

}
