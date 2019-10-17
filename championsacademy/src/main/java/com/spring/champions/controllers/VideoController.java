package com.spring.champions.controllers;

import com.spring.champions.schemas.DataInput;
import com.spring.champions.schemas.VideoIn;
import com.spring.champions.schemas.VideoOut;
import com.spring.champions.services.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@
@CrossOrigin
@RestController
public class VideoController {
    @Autowired
    public VideoService videoService;

    /**
     * Connection with angular and the exterior
     * @return
     */
    @GetMapping(/videos)
    public List<VideoOut> getAllVideos() {
        DataInput datain= new DataInput();
        VideoIn videoin=VideoIn
        return videoService.getAll();
    }

}
