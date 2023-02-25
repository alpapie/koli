import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({setauth}){
    let  history=useNavigate()
    useEffect(()=>{
        localStorage.setItem("token", "");
        localStorage.setItem("user","")
        setauth(false)
        history("/")
    })
}