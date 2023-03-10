import axios from "axios";
import React, { useState, useEffect, useLayoutEffect } from "react";

export default function KoliList({ getkoli, search }) {
	let [kolidji, setkolidji] = useState([])
	let [page, setpage] = useState(1)
	let [lastpage, setlastpage] = useState(1)
	let getkolipage = async () => {
		await axios.get(`${process.env.REACT_APP_BASE_URL}/koli/pagination/page/${page}`).then(async (res) => {
			setpage(res.data.meta.current_page + 1)
			setlastpage(res.data.meta.last_page)

			kolidji.push(...res.data.data)

			//filtre des koli
			kolidji = await kolidji.filter((obj, index) => {
				return index === kolidji.findIndex(o => obj.id === o.id);
			});
			setkolidji(kolidji)
		}).catch((error) => {
			console.log(error)
		})
	}
	useEffect(() => {
		getkolipage()
	}, [])

	return (
		<>
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
									<input type="text" onChange={(e) => {
										search(e.target.value, setkolidji)
									}} placeholder="Search..." />
									<button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
								</form>
								<div class="slider-radio">
									<input type="radio" name="grade" id="featured" checked="checked" /><label for="featured">S??n??gal</label>
									<input type="radio" name="grade" id="popular" /><label for="popular">Mali</label>
									<input type="radio" name="grade" id="newest" /><label for="newest">Guin??e</label>
								</div>
							</div>
							<div class="row row--grid">
								{
									kolidji? kolidji.map((koli) => (
										<div class="col-6 col-sm-4 col-lg-2" key={koli.id}>
											<div class="album">
												<div class="album__cover">
													<img src={process.env.REACT_APP_BASE_URL + koli.artist.image} alt="" />
													<a style={{ cursor: "pointer" }} onClick={getkoli.bind(this, koli.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg></a>
													<span class="album__stat">
														<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,13.18V11A8,8,0,0,0,4,11v2.18A3,3,0,0,0,2,16v2a3,3,0,0,0,3,3H8a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H6V11a6,6,0,0,1,12,0v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h3a3,3,0,0,0,3-3V16A3,3,0,0,0,20,13.18ZM7,15v4H5a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1Zm13,3a1,1,0,0,1-1,1H17V15h2a1,1,0,0,1,1,1Z" /></svg> 4 731</span>
													</span>
												</div>
												<div class="album__title">
													<h3><a href="release.html">{koli.titre}</a></h3>
													<span><a href="artist.html">{koli.artist.artist_nom}</a></span>
												</div>
											</div>
										</div>
									)):<div class="spinner-border d-flex justify-content-center" role="status">
									<span class="sr-only">Loading...</span>
								  </div>
								}
							</div>
							{
								page <= lastpage ?
									<button class="main__load" onClick={getkolipage} type="button">voire plus</button>
									: null
							}
						</div>
					</div>
					{/* <!-- end artists --> */}

					{/* <!-- events --> */}
				</div>
			</main>
		</>
	)
}