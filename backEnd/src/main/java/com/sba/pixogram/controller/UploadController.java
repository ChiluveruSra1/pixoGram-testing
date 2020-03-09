package com.sba.pixogram.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import com.sba.pixogram.entity.ImageUrl;
import com.sba.pixogram.entity.Login;
import com.sba.pixogram.entity.UploadPic;
import com.sba.pixogram.entity.User;
import com.sba.pixogram.repository.UploadRepository;
import com.sba.pixogram.service.UploadService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/upload")
public class UploadController {

	
	@Autowired
	UploadService uploadService;

	List<String> files = new ArrayList<String>();
	
	@PostMapping("/storeImages/{userId}")
	public UploadPic storeFile(@RequestBody UploadPic upload,@PathVariable long userId) throws IOException {
    
		UploadPic pic=new UploadPic(upload.getTitle(), upload.getDescription(),upload.getTags(),upload.getUrl());
		uploadService.createUpload(pic);
		return pic;
    }

	 @GetMapping("/getUserMedia/{userId}")
	 public List<UploadPic> getUserMedia(@PathVariable long userId) throws IOException {	 
		 return uploadService.getUploads(userId);
		
	 }
}
