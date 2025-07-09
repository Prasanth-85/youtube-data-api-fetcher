package com.data.YouTube_API.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.data.YouTube_API.entity.Video_Details;
import com.data.YouTube_API.service.VideoService;

@RestController
@RequestMapping("/video")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class videoController {

	@Autowired
	private VideoService videoServ;
	
	@PostMapping("/save")
	public ResponseEntity<?> save(@RequestBody Video_Details rv) {
	
		Video_Details v= videoServ.save(rv);
	
		if (v != null) {
			return ResponseEntity.status(HttpStatus.CREATED).body(v);
		}
		return ResponseEntity.status(HttpStatus.CONFLICT).body("Data Updated");
	}
	
	@GetMapping("/findAll")
	public List<Video_Details> findAll (){
		return videoServ.findAll();
	}
}
