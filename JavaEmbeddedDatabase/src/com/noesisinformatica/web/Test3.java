package com.noesisinformatica.web;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.noesisinformatica.test.DataService;

class Test3 {

	@Test
	void test() {
		DataService dataService = new DataService();
		
		 String testTerm = "Second test term3";
	        // adding term and getting last used id should give us the id
	        dataService.saveTerm(testTerm);
	        long id = dataService.getLastUsedId();
	        // retrieving using id should give us the term
	        
	        assertEquals(testTerm, dataService.getTermForId(id));
	}

}
