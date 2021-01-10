import { Checkbox, IconButton } from '@material-ui/core'
import React, {useEffect, useState } from 'react'
import "./emailList.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from "./section";
import EmailRow from "./emailRow";
import { db } from './firebase';


function EmailList() {

    const[emails,setEmails]=useState([]);

    useEffect(()=>{
        db.collection("emails")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot)=>
            setEmails(
                snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data(),
                }))
            )
        )
    },[]);
    return (
        <div className="emailList">
            <div className="emailList_Settings">
                <div className="emailList_SettingLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList_Settingright">
                <IconButton>
                   <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList_sections">
            <Section 
            Icon={InboxIcon}
            title="Primary"
            color="red"
            selected
            />

            <Section 
            Icon={PeopleIcon}
            title="Social"
            color="#1A73e8"
            />
            <Section 
            Icon={LocalOfferIcon}
            title="Promotions"
            color="green"
            />
            </div>

            <div className="emailList_list">

            {emails.map(({id,data : {to,subject,message,timestamp}})=>(
                <EmailRow
                id={id}
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds*1000).toUTCString()}
                />

            ))}
            <EmailRow
            title="Youtube"
            description="This is a text"
            subject="Wassssup"
            time="11pm"
            />
            <EmailRow
            title="Myntra"
            description="Order Delivered"
            subject="Thank You for shopping with us"
            time="12pm"
            />
            <EmailRow
            title="Amazon"
            description="Prime Offers"
            subject="Thank You for the Subcriptions"
            time="1pm"
            />
            </div>
        </div>
    )}

export default EmailList
