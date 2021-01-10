import { Button } from '@material-ui/core'
import React from 'react'
import "./sendMail.css"
import { useForm } from "react-hook-form";
import CloseIcon from '@material-ui/icons/Close';
import {closeSendMessage} from "./features/mailSlice";
import {useDispatch} from "react-redux";
import { db } from './firebase';
import firebase from "firebase";
function SendMail() {
    const{register,handleSubmit,watch,errors}=useForm();

    const dispatch = useDispatch();

    const onSubmit=(formData)=>{
        console.log(formData);
        db.collection("emails").add(
            {
            to:formData.to,
            subject:formData.subject,
            message:formData.message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
            }
        );
        dispatch(closeSendMessage());
    }
    return (
        <div className="sendMail">
        <div className="sendMail_header">
            <h3>New Message</h3>
            <CloseIcon onClick={()=>dispatch( closeSendMessage())} className="sendMail_close"/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            name="to" 
            placeholder="To" 
            type="email" 
            ref={register({required:true})}/>
            <p className="sendMail_error">{errors.to && <p>To is Required</p>}</p>
            <input 
            name="subject" 
            placeholder="Subject" 
            type="text"
            ref={register({required:true})}/>
            <p className="sendMail_error">{errors.to && <p>Subject is Required</p>}</p>
            <input 
            name="message" 
            placeholder="Message...." 
            className="sendMail_message" 
            type="text" 
            ref={register({required:true})}/>
             <p className="sendMail_error">{errors.to && <p>Message is Required</p>}</p>
            <div className="sendMail_options">
            <Button 
            onClick="onSubmit"
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit">
            Send
            </Button>
            </div>

        </form>
            
        </div>
    )
}

export default SendMail
