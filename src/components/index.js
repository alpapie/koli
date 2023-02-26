import React, { useState, useRef, useEffect } from "react";
import Content from "./content/content";
import Footer from "./footer";
import Header from "./header";

import Sidebar from "./sidebar";
import Pays from "./content/pays/pays";
import News from "./content/news/news";
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom';
import Page404 from "./404";
import Artists from "./content/artits/artists";
import Player from "./player";
import axios from "axios";
import Login from "./content/admin/login";
import Admin from "./content/admin/admin";
// import Login from "./admin/login";
import Isauth from './utils/isauth'
import Logout from "./content/admin/logout";
import Page403 from "./403";

function Index() {

    let [auth, setauth] = useState(false)
    let [audio, setaudio] = useState({
        id: 1,
        titre: "alpapie",
        audio: "/uploads/kolis/1677360695704Demba Hamet Guisse Tidiani Amadou.mp3",
        artist: {
            image: "/uploads/default.jpg",
            artist_nom: "DEMBA HAMET GUISSÈ",
        }
    }
    )
    let search = async (item, setkolis) => {
        let searchinput = item || "a"
        console.log(item)
        await axios.get(`${process.env.REACT_APP_BASE_URL}/koli/titre/${searchinput}`)
            .then((res) => {
                setkolis(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    let getkoli = async (id) => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/koli/${id}`)
            .then((res) => {
                // console.log(res.data)
                setaudio(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    let [loading, setloading] = useState(true)
    let [pays, setpays] = useState("senegal")

    let letdata= async () => {
        setInterval(() => {
            setloading(false)
        }, 2000);
       setauth(await Isauth()) 
    }
    
    useEffect( ()=>{
        letdata()
    }, [])
    useEffect( ()=>{
        letdata()
    }, [auth])
    let [sidebarmobile, setsidebarmobile] = useState(false)
    
    return (
        <>
            <link rel="stylesheet" href={process.env.PUBLIC_URL + 'assets/css/bootstrap-reboot.min.css'} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + 'assets/css/bootstrap-grid.min.css'} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + 'assets/css/owl.carousel.min.css'} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + 'assets/css/magnific-popup.css'} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + 'assets/css/select2.min.css'} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + 'assets/css/paymentfont.min.css'} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + 'assets/css/slider-radio.css'} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + 'assets/css/plyr.css'} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + 'assets/css/main.css'} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + '/assets/css/dashlite.css?ver=3.1.2'} />
            <link id="skin-default" rel="stylesheet" href={process.env.PUBLIC_URL + '/assets/css/theme.css?ver=3.1.2'} />

            {loading ?
                <div className="preloader">
                    <div className="lds-ripple">
                        <div className="lds-pos"></div>
                        <div className="lds-pos"></div>
                    </div>
                </div>
                : <body>
                    <Router>
                        <Header setsidebarmobile={setsidebarmobile} sidebarmobile={sidebarmobile} auth={auth} />
                        <Sidebar setpays={setpays} sidebarmobile={sidebarmobile} auth={auth}/>
                        <Player audio={audio} />
                        <Routes>
                            <Route path="/" exact={true} element={<Content getkoli={getkoli} search={search} />} />
                            <Route path="/artists" element={<Artists getkoli={getkoli} setpays={setpays} search={search} />} />
                            <Route path="/pays" element={<Pays pays={pays} getkoli={getkoli} search={search} />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/admin/*" element={auth ? <Admin setauth={setauth} />: <Page403/>} />
                            <Route path="/login" element={<Login setauth={setauth} auth={auth}/>} />
                            <Route path="/logout" element={<Logout setauth={setauth} auth={auth}/>} />
                            <Route path="*" element={<Page404 />} />
                            <Route path="admin/*" element={<Page404 />} />
                        </Routes>
                        <Footer />
                    </Router>
                </body>
            }
            <script src={process.env.PUBLIC_URL + 'assets/js/jquery-3.5.1.min.js'}></script>
            <script src={process.env.PUBLIC_URL + 'assets/js/bootstrap.bundle.min.js'}></script>
            <script src={process.env.PUBLIC_URL + 'assets/js/owl.carousel.min.js'}></script>
            <script src={process.env.PUBLIC_URL + 'assets/js/jquery.magnific-popup.min.js'}></script>
            <script src={process.env.PUBLIC_URL + 'assets/js/smooth-scrollbar.js'}></script>
            <script src={process.env.PUBLIC_URL + 'assets/js/select2.min.js'}></script>
            <script src={process.env.PUBLIC_URL + 'assets/js/slider-radio.js'}></script>
            <script src={process.env.PUBLIC_URL + 'assets/js/jquery.inputmask.min.js'}></script>
            <script src={process.env.PUBLIC_URL + 'assets/js/plyr.min.js'}></script>
            <script src={process.env.PUBLIC_URL + 'assets/js/main.js'}></script>
            <script src={process.env.PUBLIC_URL + '/assets/js/bundle.js?ver=3.1.2'}></script>
            <script src={process.env.PUBLIC_URL + '/assets/js/scripts.js?ver=3.1.2'}></script>
        </>
    )
}
export default Index;