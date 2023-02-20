import React, { useState ,useRef , useEffect}  from "react";
import Content from "./content/content";
import Footer from "./footer";
import Header from "./header";

import Sidebar from "./sidebar";
import Pays from "./content/pays/pays";
import News from "./content/news/news";
import { BrowserRouter as Router,Routes, Switch, Route, Link } from 'react-router-dom';
import Page404 from "./404";
import Artists from "./content/artits/artists";
import Player from "./player";
import axios from "axios";

function Index() {
      let [audio,setaudio] =useState({
        id:9,
        titre: "alpapie",
        audio: "/uploads/kolis/22Sidi Mbothiel (Hamady Moojo & Hamady Boon6o).mp3",
        artist:{
            image: "/uploads/images/22Capture d’écran (6).png",
            artist_nom: "Sidi Mbothiel",
        }  
         }
      )
      let getkoli =async (id) => {
       await axios.get(`${process.env.REACT_APP_BASE_URL}/koli/${id}`)
        .then((res)=>{
            // console.log(res.data)
            setaudio(res.data)

        })
        .catch((error)=>{
            console.log(error)
        })
    }

      let [loading,setloading]=useState(true)
      let [pays,setpays]=useState("senegal")
      useEffect(()=>{
        setInterval(() => {
            setloading(false)
        }, 2000);
      },[])
      let [sidebarmobile, setsidebarmobile] = useState(false)
        return(
            <>
                <link rel="stylesheet" href={process.env.PUBLIC_URL +'assets/css/bootstrap-reboot.min.css'}/>
                <link rel="stylesheet" href={process.env.PUBLIC_URL +'assets/css/bootstrap-grid.min.css'}/>
                <link rel="stylesheet" href={process.env.PUBLIC_URL +'assets/css/owl.carousel.min.css'}/>
                <link rel="stylesheet" href={process.env.PUBLIC_URL +'assets/css/magnific-popup.css'}/>
                <link rel="stylesheet" href={process.env.PUBLIC_URL +'assets/css/select2.min.css'}/>
                <link rel="stylesheet" href={process.env.PUBLIC_URL +'assets/css/paymentfont.min.css'}/>
                <link rel="stylesheet" href={process.env.PUBLIC_URL +'assets/css/slider-radio.css'}/>
                <link rel="stylesheet" href={process.env.PUBLIC_URL +'assets/css/plyr.css'}/>
                <link rel="stylesheet" href={process.env.PUBLIC_URL +'assets/css/main.css'}/>
               
               {loading?
                <div className="preloader">
                    <div className="lds-ripple">
                        <div className="lds-pos"></div>
                        <div className="lds-pos"></div>
                    </div>
                </div>
               :<body>
                    <Router>  
                    <Header setsidebarmobile={setsidebarmobile} sidebarmobile={sidebarmobile}/> 
                    <Sidebar setpays={setpays} sidebarmobile={sidebarmobile}/>
                    <Player audio={audio}/>
                        <Routes>
                            <Route path="/"  exact={true} element={<Content  getkoli={getkoli}/>}/>
                            <Route path="/artists" element={<Artists getkoli={getkoli} setpays={setpays}/>}/>
                            <Route path="/pays" element={<Pays pays={pays} getkoli={getkoli}/>} />
                            <Route path="/news" element={<News />} />
                            <Route path="/login" element=""/>
                            <Route path="*" element={<Page404/>} />
                        </Routes>
                    <Footer/>
                    </Router>
                </body>
                }
                <script src={process.env.PUBLIC_URL +'assets/js/jquery-3.5.1.min.js'}></script>
                <script src={process.env.PUBLIC_URL +'assets/js/bootstrap.bundle.min.js'}></script>
                <script src={process.env.PUBLIC_URL +'assets/js/owl.carousel.min.js'}></script>
                <script src={process.env.PUBLIC_URL +'assets/js/jquery.magnific-popup.min.js'}></script>
                <script src={process.env.PUBLIC_URL +'assets/js/smooth-scrollbar.js'}></script>
                <script src={process.env.PUBLIC_URL +'assets/js/select2.min.js'}></script>
                <script src={process.env.PUBLIC_URL +'assets/js/slider-radio.js'}></script>
                <script src={process.env.PUBLIC_URL +'assets/js/jquery.inputmask.min.js'}></script>
                <script src={process.env.PUBLIC_URL +'assets/js/plyr.min.js'}></script>
                <script src={process.env.PUBLIC_URL +'assets/js/main.js'}></script>
            </>
        )
    }
export default Index;