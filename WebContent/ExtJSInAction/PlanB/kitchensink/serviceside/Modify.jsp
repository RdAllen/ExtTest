<%@page import="java.sql.*"%>    
<%

    response.setContentType("text/html;charset=UTF-8");
    
    String  firstName = request.getParameter("firstName");
    String  lastName = request.getParameter("lastName");
    
    
    System.out.println("firstName---" +firstName);
    System.out.println("lastName---" +lastName);
    
    try{
    	
    	Class.forName("com.mysql.jdbc.Driver");
		
    	
		java.sql.Connection conn = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/extjs", "root", "root");
		
		String sql = "insert into  actor values (?,?,?,?,?) ";
		PreparedStatement pstm = conn.prepareStatement(sql);
		
	    conn.close();
    	
    }catch(Exception ex){
    	
    }
    
    
    
%>