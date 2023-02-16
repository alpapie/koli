import React, { useState }  from "react";
import Content from "./content/content";
import Footer from "./footer";
import Header from "./header";
import Plyr from "plyr-react"
import $ from 'jquery'

import Sidebar from "./sidebar";


function Index() {
      let [audio,setaudio] =useState({
            id:12,
             image: 'assets/img/artists/artist1.jpg',
             title: "Partir",
             artist: "The Living End",
             mp3: "http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
             oga: "http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg",
 
         }
      )
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
               
                <body>
                    <Header/> 
                    <Sidebar audio={audio}/>
                        <Content  setaudio={setaudio}/>
                    <Footer/>
                </body>
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