import React  from "react";
import Content from "./content/content";
import Player from "./content/player";
import Footer from "./footer";
import Load from "./load";
import Sidebar from "./sidebar";


class Index extends React.Component {
    constructor(){
        super()
        this.state={
            loading:true
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({loading:false})
            }, 2000);
    }
 
    render(){
        return(
            <>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossorigin="anonymous"
                />
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/css/fonts.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/css/bootstrap.min.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/css/font-awesome.min.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/js/plugins/swiper/css/swiper.min.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/js/plugins/nice_select/nice-select.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/js/plugins/player/volume.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/js/plugins/scroll/jquery.mCustomScrollbar.css'}/>
                <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + '/assets/css/style.css'}/>

                {this.state.loading?<Load/>:
                <div class="ms_main_wrapper">
                    <Sidebar/>
                    <Content/>
                    <Footer/>
                    <Player/>
                </div>
                }
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
                    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
                </script>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
                    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
                </script>
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
            </>
        )
    }
}
export default Index;