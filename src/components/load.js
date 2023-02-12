import React from "react";

export default class Load extends React.Component{
   render(){
    return(
        <>
        <div class="ms_loader">
		<div class="wrap">
		  <img src={process.env.PUBLIC_URL + '/assets/images/loader.gif'} alt=""/>
          
		</div>
	    </div>
        </>
    )
   }
}