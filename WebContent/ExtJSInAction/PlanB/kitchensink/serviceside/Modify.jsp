<%@page import="java.sql.*"%>    
<%

    response.setContentType("text/html;charset=UTF-8");

    String  start = request.getParameter("start");
    String  limit = request.getParameter("limit");
    
    System.out.println("start---" +start);
    System.out.println("limit---" +limit);
    
    try{
    	
    	Class.forName("com.mysql.jdbc.Driver");
		
    	int index = Integer.parseInt(start);
    	int pageSize = Integer.parseInt(limit);
    	
		java.sql.Connection conn = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/extjs", "root", "root");
		
		String sql = "select * from actor order by actor_id";
		PreparedStatement pstm = conn.prepareStatement(sql);
		
		
		ResultSet rs = pstm.executeQuery();
		rs.last();
		int sumSize  = rs.getRow();
		System.out.println("last sumSize "+sumSize);
		rs.beforeFirst();
		
		int sumtOSize  = rs.getRow();
		System.out.println("beforeFirst sumtOSize ---"+sumtOSize);
		int count = 0;
		//for(int i = 0 ; i< pageSize + index ; i++){
	    String json = "{success:'success', data :[";
	    while(rs.next()){		
			long actorId = rs.getLong(1);
			String firstName = rs.getString(2);
			String lastName = rs.getString(3);
			Date lastUpdate = rs.getDate(4);
			String phone = rs.getString(5);
			
			json += "{actorId :'"+actorId +"',firstName :'"+firstName+" ',lastName:'"+lastName+"',lastUpdate:'"+lastUpdate+"', phone:'"+phone+"'}";
			
			count++;
			if(count < sumSize){
				json += ",";
			}
		}
	    
	    json += "]}";
		System.out.println(json);
	    response.getWriter().write(json);
	    
	    conn.close();
    	
    }catch(Exception ex){
    	
    }
    
    
    
%>