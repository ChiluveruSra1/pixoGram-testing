package com.sba.pixogram.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "login") 
public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;
	@Column(name = "firstname")
	private String fname;
	@Column(name = "lastname")
	private String lname;	
	@Column(name = "username")
	private String username;
	@Column(name = "password")
	private String password;
	@Column(name = "email")
	private String email;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}


	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Login(String firstname, String lastname, String username, String password, String email) {
		super();
		this.fname = firstname;
		this.lname = lastname;
		this.username = username;
		this.password = password;
		this.email = email;
	}
	
	
}
