package com.sba.pixogram.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sba.pixogram.entity.UploadPic;
import com.sba.pixogram.service.UploadService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/auth/upload")
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
 
	 @GetMapping("/allmedia")
		public List<UploadPic> getMedias() {
			return uploadService.getAll();
		}
	 
}
