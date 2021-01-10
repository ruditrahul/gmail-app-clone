import React, { useEffect } from 'react';
import './App.css';
import Header from "./header";
import SideBar from "./sidebar";
import Mail from "./mail";
import EmailList from "./emailList";
import SendMail from "./sendMail";
import Login from "./login";
import {login} from "./features/userSlice";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';

//Main App Function that contains the login page and the main email page
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user=useSelector(selectUser);
  const dispatch=useDispatch();


  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL
        }))
      }
    })
  },[])


  console.log(user);


  return (
    <Router>
    {!user?(
    <Login/>
    ): (
      <div className="app">
       <Header/>

         <div className="app_body">
         <SideBar/>

         <Switch>
         <Route path="./mail">
             <Mail/>
           </Route>
           <Route path="/">
             <EmailList/>
           </Route>
         </Switch>
         </div>

         {sendMessageIsOpen && <SendMail/>};
    </div>
    )}
    </Router>
  );
}

export default App;
 