package com.service;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;


public class Connection {
	public static void main(String []args){
		Connection conn = new Connection();
		conn.getConnection();
	}
	
	public java.sql.Connection getConnection(){
		try {
			Class.forName("com.mysql.jdbc.Driver");
			
			java.sql.Connection conn = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/extjs", "root", "root");
			
			String sql = "select * from actor";
			PreparedStatement pstm = conn.prepareStatement(sql);
			ResultSet rs = pstm.executeQuery();
			while (rs.next()){
				rs.getLong(1);
				rs.getString(2);
			    System.out.println(rs.getString(3));
			}
			
			conn.close();
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			
			e.printStackTrace();
		}
		
		return null;
	}
	
	
	
	
	
	

}
