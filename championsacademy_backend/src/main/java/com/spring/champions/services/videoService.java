package com.spring.champions.services;

import com.spring.champions.schemas.Constants;
import com.spring.champions.schemas.DataInput;
import com.spring.champions.schemas.DataOutput;
import com.spring.champions.schemas.VideoOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.oxm.jaxb.Jaxb2Marshaller;
import org.springframework.ws.client.core.WebServiceTemplate;
import org.springframework.ws.client.core.support.WebServiceGatewaySupport;
import org.springframework.ws.soap.SoapMessage;
import org.springframework.ws.soap.client.core.SoapActionCallback;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
import org.springframework.ws.client.core.support.WebServiceGatewaySupport;
import org.springframework.ws.soap.client.core.SoapActionCallback;

import hello.wsdl.GetCountryRequest;
import hello.wsdl.GetCountryResponse;
 **/

import java.util.List;


public class videoService extends WebServiceGatewaySupport {
    private static final Logger log = LoggerFactory.getLogger(videoService.class);

    Constants cons= new Constants();

@Autowired
public Jaxb2Marshaller marshaller;

public WebServiceTemplate template;


    public List <VideoOut>  getAll (DataInput request) {


        template = new WebServiceTemplate(marshaller);
        template.setDefaultUri(cons.getGetAllURL());

       DataOutput response = (DataOutput) template
                .marshalSendAndReceive(request, message -> ((SoapMessage)message).setSoapAction(cons.getSOAPURL()));


        return response.getVideoOut();
    }

    public List <VideoOut>  get (DataInput request) {



        template = new WebServiceTemplate(marshaller);
        template.setDefaultUri(cons.getGetURL());

        DataOutput response = (DataOutput) template
                .marshalSendAndReceive(request, message -> ((SoapMessage)message).setSoapAction(cons.getSOAPURL()));


        return response.getVideoOut();
    }

    public List <VideoOut>  update (DataInput request) {



        template = new WebServiceTemplate(marshaller);
        template.setDefaultUri(cons.getUpdateURL());

        DataOutput response = (DataOutput) template
                .marshalSendAndReceive(request, message -> ((SoapMessage)message).setSoapAction(cons.getSOAPURL()));


        return response.getVideoOut();
    }

    public List <VideoOut> create (DataInput request) {



        template = new WebServiceTemplate(marshaller);
        template.setDefaultUri(cons.getCreateURL());

        DataOutput response = (DataOutput) template
                .marshalSendAndReceive(request, message -> ((SoapMessage)message).setSoapAction(cons.getSOAPURL()));


        return response.getVideoOut();
    }

    public List <VideoOut> delete (DataInput request) {



        template = new WebServiceTemplate(marshaller);
        template.setDefaultUri(cons.getDeleteURL());

        DataOutput response = (DataOutput) template
                .marshalSendAndReceive(request, message -> ((SoapMessage)message).setSoapAction(cons.getSOAPURL()));


        return response.getVideoOut();
    }



}

