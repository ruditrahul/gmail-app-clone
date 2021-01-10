import { Button, IconButton } from '@material-ui/core';
import React from 'react'
import "./sidebar.css";
import AddIcon from '@material-ui/icons/Add';
import SidebarComponents from "./sidebarComponents";
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import SnoozeIcon from '@material-ui/icons/Snooze';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import DraftsIcon from '@material-ui/icons/Drafts';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {openSendMessage} from "./features/mailSlice";
import {useDispatch} from "react-redux";

function Sidebar() {

    const dispatch = useDispatch()
    return (
        <div className="sidebar">
        <Button 
        onClick={()=>dispatch(openSendMessage())}
        className="sidebar_compose">
        <AddIcon fontsize="large"/>
        COMPOSE
        </Button>
            <SidebarComponents 
            Icon={InboxIcon}
            title="Inbox"
            number={54}
            />
            <SidebarComponents
            Icon={StarIcon}
            title="Starred"
            number={22}
            />
            <SidebarComponents
            Icon={LabelImportantIcon}
            title="Important"
            number={130}
            />
            <SidebarComponents
            Icon={SnoozeIcon}
            title="Snoozed"
            number={22}
            />
            <SidebarComponents
            Icon={DoubleArrowIcon}
            title="Sent"
            number={220}
            />

            <SidebarComponents
            Icon={DraftsIcon}
            title="Draft"
            number={60}
            />
            <div className="sidebar_footer">
                <div className="sidebar_footerIcon">
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <DuoIcon/>
                </IconButton>
                <IconButton>
                    <PhoneIcon/>
                </IconButton>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
