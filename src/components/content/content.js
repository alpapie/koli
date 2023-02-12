import React from "react";

export default class Content extends React.Component{
   render(){
    return(
        <>
        <div class="ms_content_wrapper padder_top80">
            <div class="ms_header">
                <div class="ms_top_left">
                    <div class="ms_top_search">
                        <input type="text" class="form-control" placeholder="Search Music Here.."/>
                        <span class="search_icon">
							<img src="assets/images/svg/search.svg" alt=""/>
						</span>
                    </div>
                    <div class="ms_top_trend">
                        <span><a href="#"  class="ms_color">Trending Songs :</a></span> <span class="top_marquee"><a href="#">Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley (+8 More)</a></span>
                    </div>
                </div>
                <div class="ms_top_right">
                    <div class="ms_top_lang">
                        <span data-bs-toggle="modal" data-target="#lang_modal">languages <img src="assets/images/svg/lang.svg" alt=""/></span>
                    </div>
                    <div class="ms_top_btn">
                        <a href="javascript:;" class="ms_btn reg_btn" data-bs-toggle="modal" data-bs-target="#myModal"><span>register</span></a>
                        <a href="javascript:;" class="ms_btn login_btn" data-bs-toggle="modal" data-bs-target="#myModal1"><span>login</span></a>
                    </div>
                </div>
            </div>
    
            <div class="ms-banner">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="ms_banner_img">
                                <img src="assets/images/banner.png" alt="" class="img-fluid"/>
                            </div>
                            <div class="ms_banner_text">
                                <h1>This Month’s</h1>
                                <h1 class="ms_color">Record Breaking Albums !</h1>
                                <p>Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley, One More Of A Stranger, Endless<br/> Things, The Heartbeat Stops, Walking Promises, Desired Games and many more...</p>
                                <div class="ms_banner_btn">
                                    <a href="#" class="ms_btn">Listen Now</a>
                                    <a href="#" class="ms_btn">Add To Queue</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
   }
}