package com.spring.academy.SpringChampionsAcademy.controllers;


import com.spring.academy.SpringChampionsAcademy.schemas.DataInput;
import com.spring.academy.SpringChampionsAcademy.schemas.VideoIn;
import com.spring.academy.SpringChampionsAcademy.schemas.VideoOut;
import com.spring.academy.SpringChampionsAcademy.service.videoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("videos")
public class videoController {
    @Autowired
    public com.spring.academy.SpringChampionsAcademy.service.videoService videoService;

    /**
     * Connection with angular and the exterior
     * @return
     */

    @RequestMapping("getAll")
    public List<VideoOut> getAllVideos() {

        DataInput datain= new DataInput();
        VideoIn videoin= new VideoIn("1","","","");
        List<VideoIn> videoInSchema=  datain.getVideoIn();
        videoInSchema.add(videoin);
        return videoService.getAll(datain);

    }




}
