package com.sba.pixogram.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba.pixogram.entity.UploadPic;
import com.sba.pixogram.entity.MyUser;
import com.sba.pixogram.repository.UploadRepository;
@Service
public class UploadServiceImpl implements UploadService {

	@Autowired
	UploadRepository uploadRepository;
	
	
	@Override
	public UploadPic createUpload(UploadPic upload) {
		
		return uploadRepository.save(upload);
	}

	@Override
	public List<UploadPic> getUploads(long userId) {
		// TODO Auto-generated method stub
		return uploadRepository.findById(userId);
	}

	@Override
	public List<UploadPic> getAll() {
		// TODO Auto-generated method stub
		return (List<UploadPic>) uploadRepository.findAll();
	}
	
	

}
