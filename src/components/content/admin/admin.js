import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Page404 from "../../404";
import Listkoli from "./listkoli";
import Login from "./login";
import Isauth from "../../utils/isauth";

export default function Admin({setauth}){
    let letdata=async ()=>{
        setauth(await Isauth())
    }
    useEffect(()=>{
        letdata()
    },[])
    return(
        <>
        
        <Routes>
            <Route path="/" element={<Listkoli setauth ={setauth} />}/>
            <Route path="*" element={<Login/>}/>
        </Routes>
        </>
    )
}