package com.noesisinformatica.test;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

import java.util.List;


public class DataService {

   MongoClientURI uri = new MongoClientURI(
    "mongodb+srv://rf:thebest1@ecom-95a4a.mongodb.net/test?retryWrites=true&w=majority");

   MongoClient mongoClient = new MongoClient(uri);
   DB db = mongoClient.getDB("terms");
   
   DBCollection coll = db.getCollection("TermsCollection");
   


    
    private long lastUsedId =  coll.count() + 1000;
    
   

    public DataService(){
  
        // save some initial data
        saveTerm("First term");
        saveTerm("Second term");
        saveTerm("Another term");
        saveTerm("Miscellaneous term");
        saveTerm("");
        saveTerm("hello term");
       
        
    }

   public DBObject getTermForId(Long id){
	   
	   DBObject query = new BasicDBObject("id", id);
	   DBObject data1 = coll.findOne(query);
	   
        return data1;
    }

   public void saveTerm(String term){
        // check if term already exists in data
        boolean exists = false;
        
        DBObject query = new BasicDBObject("term", term);
        int data = coll.find(query).count();
        
       
            if(data>0){
                exists = true;
            }
        

        // add term if it does not already exist
        if(!exists)
        {
            // get last used Id and generate next i
            long key = getLastUsedId() + 1;
           
            BasicDBObject document = new BasicDBObject();
            document.put("id", key);
            document.put("term", term);
            
            coll.insert(document);
            System.out.println("Document inserted successfully");
            // set key as last used id, so it is available for next use
            setLastUsedId(key);
        }
    }

    public List<DBObject> getAllTerm(){
    	
    	List<DBObject> myList = null;
    	
        DBCursor myCursor=coll.find();
        myList = myCursor.toArray();
        
        return myList;
    }

    public long getLastUsedId() {
        return lastUsedId;
    }

    public void setLastUsedId(long lastUsedId) {
        this.lastUsedId = lastUsedId;
    }
}