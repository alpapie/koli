import React ,{useEffect,useState} from "react";
import Content from "./content/content";
import Player from "./content/player";
import Footer from "./footer";
import Load from "./load";
import Sidebar from "./sidebar";


function Index(){
    let [loading,setloading]=useState(true)
    useEffect(()=>{
        return ()=>{
            setloading(false)
        }
    },[])
    

    return(
        <>
            <html lang="en">
            <head>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/css/fonts.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/css/bootstrap.min.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/css/font-awesome.min.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/js/plugins/swiper/css/swiper.min.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/js/plugins/nice_select/nice-select.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/js/plugins/player/volume.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/js/plugins/scroll/jquery.mCustomScrollbar.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/css/style.css'}/>
               
            </head>
            <body>
                {loading?<Load/>:null}
                <div class="ms_main_wrapper">
                    <Sidebar/>
                    <Content/>
                    <Footer/>
                    <Player/>

                </div>


                <script type="text/javascript" src={process.env.PUBLIC_URL + '/assets/js/bootstrap.min.js'}></script>
                <script type="text/javascript" src={process.env.PUBLIC_URL + '/assets/js/jquery.min.js'}></script>
                <script type="text/javascript" src={process.env.PUBLIC_URL + '/assets/js/plugins/swiper/js/swiper.min.js'}></script>
                <script type="text/javascript" src={process.env.PUBLIC_URL + '/assets/js/plugins/player/jplayer.playlist.min.js'}></script>
                <script type="text/javascript" src={process.env.PUBLIC_URL + '/assets/js/plugins/player/jquery.jplayer.min.js'}></script>
                <script type="text/javascript" src={process.env.PUBLIC_URL + '/assets/js/plugins/player/audio-player.js'}></script>
                <script type="text/javascript" src={process.env.PUBLIC_URL + '/assets/js/plugins/player/volume.js'}></script>
                <script type="text/javascript" src={process.env.PUBLIC_URL + '/assets/js/plugins/nice_select/jquery.nice-select.min.js'}></script>
                <script type="text/javascript" src={process.env.PUBLIC_URL + '/assets/js/plugins/scroll/jquery.mCustomScrollbar.js'}></script>
                <script type="text/javascript" src={process.env.PUBLIC_URL + '/assets/js/custom.js'}></script>
            </body>

            </html>
        </>
    )
}
export default Index;