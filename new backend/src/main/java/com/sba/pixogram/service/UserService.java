package com.sba.pixogram.service;

import java.util.List;
import java.util.Optional;

import com.sba.pixogram.entity.Login;
import com.sba.pixogram.entity.MyUser;

public interface UserService {

	public List<Login> getUsers(Long id);
	
	public MyUser createUser(MyUser user);
	
	public MyUser getUserById(Long userId);

	public List<Login> getUsersList(); 
	
	public Login createlogin(Login log);

	public void UpdateUser(Long id,String pass);
}
