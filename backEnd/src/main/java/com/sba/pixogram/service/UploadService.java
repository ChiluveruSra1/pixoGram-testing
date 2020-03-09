package com.sba.pixogram.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sba.pixogram.entity.UploadPic;

public interface UploadService {


	public UploadPic createUpload(UploadPic upload);

	public List<UploadPic> getUploads(long userId);
}
