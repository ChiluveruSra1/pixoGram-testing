package com.sba.pixogram.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.userdetails.User;

import com.sba.pixogram.entity.Login;
import com.sba.pixogram.entity.MyUser;
import com.sba.pixogram.repository.LoginRepository;
import com.sba.pixogram.repository.UserRepository;
import com.sba.pixogram.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/auth")
public class UserController {

	@Autowired
	UserService userService;
	@Autowired
	BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	JdbcUserDetailsManager jdbcUserDetailsManager;
	List<User> lu = new ArrayList<User>();
	
	@GetMapping(path = "/user")
	public List<Login> getUsers() {
		return userService.getUsersList();
	}

	@GetMapping(path = "/users/{userId}")
	public List<Login> getUsers(@PathVariable Long userId) {
		return userService.getUsers(userId);
	}

	@PostMapping(path = "/user/create")
	public User createUser(@RequestBody MyUser myUser) {
		
		List<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority("USER"));
		String encodededPassword = passwordEncoder.encode(myUser.getPassword());
		User user = new User(myUser.getUserName(), encodededPassword, authorities);
		jdbcUserDetailsManager.createUser(user);
		
		
		  User _user = userService.createUser(user); Login login=new
		  Login(user.getFname(),user.getLname(),user.getUsername(),encodededPassword,
		  user.getEmail(),user.getProfilepic()); userService.createlogin(login);
		 
		return user2;
	}

	@GetMapping(path = "/user/{userId}")
	public MyUser getUserById(@PathVariable Long userId) {
		MyUser u=userService.getUserById(userId);
		MyUser u1= new MyUser();
		u1.setEmail(u.getEmail());
		u1.setId(u.getId());
		u1.setFname(u.getFname());
		u1.setLname(u.getLname());
		u1.setUsername(u.getUsername());
		u1.setPassword(u.getPassword());
		u1.setProfilepic(u.getProfilepic());
		return u1; 
	}
	
	@PutMapping(path = "/user/{userId}/{password}")
	public void UpdateUser(@PathVariable Long userId,@PathVariable String password) {
		userService.UpdateUser(userId, password);	
	}
}
