import React from 'react'
import "./mail.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {  IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {selectOpenMail} from "./features/mailSlice";
import { useSelector } from "react-redux";


function Mail() {
    const history=useHistory();
    const selectedMail=useSelector(selectOpenMail);

        <div className="mail">
        <div className="mail_tools">
            <div className="mail_toolsLeft">
            <IconButton onClick={() => history.push("/")}>
                <ArrowBackIcon/>
            </IconButton>
            <IconButton>
                <MoveToInboxIcon/>
            </IconButton>
            <IconButton>
                <ErrorIcon/>
            </IconButton>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
            <IconButton>
                <EmailIcon/>
            </IconButton>
            <IconButton>
                <WatchLaterIcon/>
            </IconButton>
            <IconButton>
                <CheckCircleIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>

            </div>
            <div className="mail_toolsRight">
            <IconButton>
                <UnfoldMoreIcon/>
            </IconButton>
            <IconButton>
                <PrintIcon/>
            </IconButton>
            <IconButton>
                <ExitToAppIcon/>
            </IconButton>

            </div>
        </div>
        <div className="mailbody">
        <div className="mailbody_header">
        <h2>{selectedMail?.subject}</h2>
        <LabelImportantIcon className="mail_important"/>
        <p>{selectedMail?.title}</p>
        <p className="mail_time">{selectedMail?.time}</p>

        </div>
        <div className="mail_message">
        <p>{selectedMail?.description}</p>

        </div>

        </div>
            
        </div>
}

export default Mail;
