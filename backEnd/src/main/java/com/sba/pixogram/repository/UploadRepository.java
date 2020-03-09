package com.sba.pixogram.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sba.pixogram.entity.UploadPic;

@Repository
public interface UploadRepository extends CrudRepository<UploadPic, Long> {

	List<UploadPic> findById(long userId);



}
