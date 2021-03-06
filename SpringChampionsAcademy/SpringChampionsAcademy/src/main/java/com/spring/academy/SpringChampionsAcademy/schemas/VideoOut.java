//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.3.0 
// See <a href="https://javaee.github.io/jaxb-v2/">https://javaee.github.io/jaxb-v2/</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.10.18 at 09:43:33 AM BST 
//


package com.spring.academy.SpringChampionsAcademy.schemas;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;attribute name="Duration" type="{http://www.w3.org/2001/XMLSchema}string" /&gt;
 *       &lt;attribute name="ID_Video" type="{http://www.w3.org/2001/XMLSchema}string" /&gt;
 *       &lt;attribute name="Topic" type="{http://www.w3.org/2001/XMLSchema}string" /&gt;
 *       &lt;attribute name="VideoName" type="{http://www.w3.org/2001/XMLSchema}string" /&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "")
@XmlRootElement(name = "videoOut")
public class VideoOut {

    @XmlAttribute(name = "Duration")
    protected String duration;
    @XmlAttribute(name = "ID_Video")
    protected String idVideo;
    @XmlAttribute(name = "Topic")
    protected String topic;
    @XmlAttribute(name = "VideoName")
    protected String videoName;

    public VideoOut() {
    }

    public VideoOut(String idVideo, String videoName , String duration, String topic) {
        this.duration = duration;
        this.idVideo = idVideo;
        this.topic = topic;
        this.videoName = videoName;
    }

    /**
     * Gets the value of the duration property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDuration() {
        return duration;
    }

    /**
     * Sets the value of the duration property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDuration(String value) {
        this.duration = value;
    }

    /**
     * Gets the value of the idVideo property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIDVideo() {
        return idVideo;
    }

    /**
     * Sets the value of the idVideo property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIDVideo(String value) {
        this.idVideo = value;
    }

    /**
     * Gets the value of the topic property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTopic() {
        return topic;
    }

    /**
     * Sets the value of the topic property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTopic(String value) {
        this.topic = value;
    }

    /**
     * Gets the value of the videoName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVideoName() {
        return videoName;
    }

    /**
     * Sets the value of the videoName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVideoName(String value) {
        this.videoName = value;
    }

}
