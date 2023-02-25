import axios from "axios";
import React, { useState ,useEffect} from "react";
import Artist from './artist'

export default function Artists({getkoli,search}) {
	let [isartist,setisartist]=useState(false)
	let [artist,setartist]=useState("")
	let [artists, setartists] = useState(
        []
    )
	let getartist=(name)=>{
		setisartist(true)
		setartist(name)
	}

	async function getartists (){
        await axios.get(`${process.env.REACT_APP_BASE_URL}/artists`)
        .then((res)=>{
            setartists(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
       
   } 
   	useEffect(()=>{
        getartists()
    },[])
	return (
		<>
			{isartist?<Artist getkoli={getkoli} artist={artist} search={search}/> :
				<main class="main">
				<div class="container-fluid">
					{/* <!-- artists --> */}
					<div class="row row--grid">
						{/* <!-- breadcrumb --> */}
						<div class="col-12">
							<ul class="breadcrumb">
								<li class="breadcrumb__item"><a href="index.html">Home</a></li>
								<li class="breadcrumb__item breadcrumb__item--active">koli</li>
							</ul>
						</div>
						{/* <!-- end breadcrumb -->

				<!-- title --> */}
						<div class="col-12">
							<div class="main__title main__title--page">
								<h1>Koli</h1>
							</div>
						</div>
						{/* <!-- end title --> */}
					</div>

					<div class="row row--grid">
						<div class="col-12">
							<div class="main__filter">
								<form action="#" class="main__filter-search">
									<input type="text" placeholder="Search..." />
									<button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
								</form>
								{/* <div class="slider-radio">
									<input type="radio" name="grade" id="featured" checked="checked" /><label for="featured">Sénégal</label>
									<input type="radio" name="grade" id="popular" /><label for="popular">Mali</label>
									<input type="radio" name="grade" id="newest" /><label for="newest">Guinée</label>
								</div> */}
							</div>
							<div class="row row--grid">
								{
									artists.map((artists,i) =>

										<div class="col-6 col-sm-4 col-md-3 col-xl-2" key={i}>
											<a style={{cursor:"pointer"}} onClick={getartist.bind(this,artists.artist_nom)} class="artist">
												<div class="artist__cover">
													<img src= {process.env.REACT_APP_BASE_URL+artists.image} alt="" />
												</div>
												<h3 class="artist__title">{artists.artist_nom}</h3>
											</a>
										</div>

									)}
							</div>
							{/* <button class="main__load" type="button">Load more</button> */}
						</div>
					</div>
					{/* <!-- end artists --> */}

					{/* <!-- events --> */}
				</div>
			</main>}
		</>
	)
}