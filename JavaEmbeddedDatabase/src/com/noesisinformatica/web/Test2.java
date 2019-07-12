package com.noesisinformatica.web;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.noesisinformatica.test.DataService;

class Test2 {

	@Test
	void test() {
		DataService dataService = new DataService();
		int termInDataService = dataService.getAllTerm().size();
        // adding term should increment number
        dataService.saveTerm("Term from app1");
        assert dataService.getAllTerm().size() > termInDataService;
	}

}
