package com.noesisinformatica.test;

import java.sql.Connection; 
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException; 
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import java.util.List;


public class DataService {

    private List<Map<Long,String>> data1 = new ArrayList<Map<Long,String>>();
    private int lastUsedId = 1000 + lastUsedIdData();
    
    static final String JDBC_DRIVER = "org.h2.Driver";   
    static final String DB_URL = "jdbc:h2:~/test";  
    
    //  Database credentials 
    static final String USER = "sa"; 
    static final String PASS = "";
    
    Connection conn = null; 
    Statement stmt = null; 
    

    public DataService(){
    
        saveTerm("First term");
        saveTerm("Second term");
        saveTerm("Another term");
        saveTerm("Miscellaneous term");
        saveTerm("");
    }
    public void DBService(int key,String term) {
    	
    	 try {  
             Class.forName(JDBC_DRIVER); 
                 
             System.out.println("Connecting to database..."); 
             conn = DriverManager.getConnection(DB_URL,USER,PASS); 
             stmt = conn.createStatement();
             String term1 = "INSERT INTO TERMS (id,term)" + "VALUES ('"+key+"', '"+term+"')"; 
         	stmt.executeUpdate(term1);
         	System.out.println("Inserted a string");
         	
         	 stmt.close(); 
             conn.close(); 
          } catch(SQLException se) { 
             se.printStackTrace(); 
          } catch(Exception e) { 
             e.printStackTrace(); 
          } finally { 
             try { 
                if(conn!=null) conn.close(); 
             } catch(SQLException se){ 
                se.printStackTrace(); 
             }
          }
    }
    public Integer lastUsedIdData(){
    	int total =0;
   	 try { 
            Class.forName(JDBC_DRIVER); 
            
            conn = DriverManager.getConnection(DB_URL,USER,PASS);  
             
            stmt = conn.createStatement(); 
            String sql = "SELECT * FROM TERMS "; 
            ResultSet rs = stmt.executeQuery(sql); 
            rs.last(); 
          total = rs.getRow();
            
            rs.close(); 
          
         } catch(SQLException se) { 
            // Handle errors for JDBC 
            se.printStackTrace(); 
         } catch(Exception e) { 
            // Handle errors for Class.forName 
            e.printStackTrace(); 
         } finally { 
            // finally block used to close resources 
            try { 
               if(stmt!=null) stmt.close();  
            } catch(SQLException se2) { 
            } // nothing we can do 
            try { 
               if(conn!=null) conn.close(); 
            } catch(SQLException se) { 
               se.printStackTrace(); 
            } // end finally try 
         }
   	 return total;
   	
    }
    public void getTermsData(){
    
   	 try { 
            Class.forName(JDBC_DRIVER); 
            
            conn = DriverManager.getConnection(DB_URL,USER,PASS);  
             
            stmt = conn.createStatement(); 
            String sql = "SELECT * FROM TERMS "; 
            ResultSet rs = stmt.executeQuery(sql); 
            
            while(rs.next()){ 
            	
            	Map<Long,String> row = new HashMap<Long, String>();
                int id  = rs.getInt("id"); 
                String term = rs.getString("term"); 
                Long i = new Long(id);
                row.put(i,term);
                
                data1.add(row);
                
                
             } 
         
            rs.close(); 
            
          
         } catch(SQLException se) { 
            se.printStackTrace(); 
         } catch(Exception e) { 
            e.printStackTrace(); 
         } finally { 
            try { 
               if(stmt!=null) stmt.close();  
            } catch(SQLException se2) { 
            }  
            try { 
               if(conn!=null) conn.close(); 
            } catch(SQLException se) { 
               se.printStackTrace(); 
            }  
            
            
         }
   	 
   	 
   	
    }
    
    
    
    
    public Boolean getExists(String term) {
    	int total =0;
    	 try { 
             Class.forName(JDBC_DRIVER); 
             
             conn = DriverManager.getConnection(DB_URL,USER,PASS);  
              
             stmt = conn.createStatement(); 
             String sql = "SELECT id, term FROM TERMS WHERE term = '"+term+"' "; 
             ResultSet rs = stmt.executeQuery(sql); 
             rs.last(); 
           total = rs.getRow();
             
             rs.close(); 
           
          } catch(SQLException se) { 
             se.printStackTrace(); 
          } catch(Exception e) { 
             e.printStackTrace(); 
          } finally { 
             try { 
                if(stmt!=null) stmt.close();  
             } catch(SQLException se2) { 
             } 
             try { 
                if(conn!=null) conn.close(); 
             } catch(SQLException se) { 
                se.printStackTrace(); 
             }
          }
    	 if(total > 0) {
    		 return true;
    	 }
    	 else {
    		 return false;
    	 }
    }

   public String getTermForId(Long id){
	   
	   String term1 = null;
  	 try { 
         Class.forName(JDBC_DRIVER); 
         
         conn = DriverManager.getConnection(DB_URL,USER,PASS);  
          
         stmt = conn.createStatement(); 
         String sql = "SELECT  term FROM TERMS WHERE id = '"+id+"' "; 
         ResultSet rs = stmt.executeQuery(sql); 
       while(rs.next()){
    	   term1 = rs.getString("term");
    	   
       }
         
         rs.close(); 
       
      } catch(SQLException se) { 
         se.printStackTrace(); 
      } catch(Exception e) { 
         e.printStackTrace(); 
      } finally { 
         try { 
            if(stmt!=null) stmt.close();  
         } catch(SQLException se2) { 
         } 
         try { 
            if(conn!=null) conn.close(); 
         } catch(SQLException se) { 
            se.printStackTrace(); 
         }
      }
	   
        return term1;
    }

   public void saveTerm(String term)  {
        // check if term already exists in data
        boolean exists = getExists(term);
        

        if(!exists)
        {
           int key = getLastUsedId() + 1;
          DBService(key,term);
            setLastUsedId(key);
        }
    }

  public List<Map<Long,String>> getAllTerm(){
	  getTermsData();
      return data1;
  }
    public int getLastUsedId() {
        return lastUsedId;
    }

    public void setLastUsedId(int lastUsedId) {
        this.lastUsedId = lastUsedId;
    }
}