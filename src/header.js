import React from 'react';
import "./header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import {selectUser} from "./features/userSlice";
import {auth} from "./firebase";
import {logout} from "./features/userSlice";
import emailList from "./emailList";
import { Switch } from '@material-ui/core';

function Header() {

    const user=useSelector(selectUser);
    const dispatch=useDispatch();

    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(logout());
        });
    };

    function changeTheme()
    {
        <emailList  style={{backgroundColor: "lightblue"}}/>
    }

    return (
        <div className="header">
        <div className="header_left">
        <IconButton>
            <MenuIcon/>
        </IconButton>
        <img src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="Gmail Image"/>

        </div>
        <div className="header_middle">
        <SearchIcon/>
        <input 
        placeholder="Search Mail" 
        type="text"/>
        <ArrowDropDownIcon className="header_inputCarot"/>
        </div>
        <div className="header_right">
        <IconButton>
            <Switch onClick={changeTheme} color="primary"/>
        </IconButton>
        <IconButton>
        <AppsIcon/>
        </IconButton>
        <IconButton>
            <NotificationsIcon/>
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl}/>

        </div>
            
        </div>
    )
}

export default Header
