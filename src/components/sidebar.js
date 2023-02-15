import React, { useState } from "react";

export default function Sidebar (){

		let [sibarclass,setsibarclass]=useState("ms_sidemenu_wrapper")

		function opside(){
			if(sibarclass==="ms_sidemenu_wrapper"){
				setsibarclass(sibarclass+" open_menu")
			}else{
				setsibarclass("ms_sidemenu_wrapper")
			}
			
		}
		return (
			<>
				<div class={sibarclass}>
					<div class="ms_nav_close" onClick={opside.bind(this)}>
						<i class="fa fa-fw fa-angle-left" aria-hidden="true"></i>

					</div>

					<div class="ms_sidemenu_inner">
						<div class="ms_logo_inner">
							<div class="ms_logo">
								<a href="index.html"><img src="assets/images/logo.png" alt="" class="img-fluid" /></a>
							</div>
							<div class="ms_logo_open">
								<a href="index.html"><img src="assets/images/open_logo.png" alt="" class="img-fluid" /></a>
							</div>
						</div>
						<div class="ms_nav_wrapper">
							<ul>
								<li><a href="index.html" class="active" title="Discover">
									<span class="nav_icon">
										<span class="icon icon_discover"></span>
									</span>
									<span class="nav_text">
										Acceuil
									</span>
								</a>
								</li>
								<li><a href="artist.html" title="Artists">
									<span class="nav_icon">
										<span class="icon icon_artists"></span>
									</span>
									<span class="nav_text">
										artists
									</span>
								</a>
								</li>
								<li><a href="genres.html" title="Genres">
									<span class="nav_icon">
										<span class="icon icon_genres"></span>
									</span>
									<span class="nav_text">
										pays
									</span>
								</a>
								</li>
								<li><a href="top_track.html" title="Top Tracks">
									<span class="nav_icon">
										<span class="icon icon_tracks"></span>
									</span>
									<span class="nav_text">
										top Koli
									</span>
								</a>
								</li>
							</ul>
							<ul class="nav_downloads">
								{/* <li><a href="download.html" title="Downloads">
									<span class="nav_icon">
										<span class="icon icon_download"></span>
									</span>
									<span class="nav_text">
										downloads
									</span>
								</a>
								</li>
								<li><a href="purchase.html" title="Purchased">
									<span class="nav_icon">
										<span class="icon icon_purchased"></span>
									</span>
									<span class="nav_text">
										purchased
									</span>
								</a>
								</li> */}
								<li>
									<a href="favourite.html" title="Favourites">
										<span class="nav_icon">
											<span class="icon icon_favourite"></span>
										</span>
										<span class="nav_text">
											favorites
										</span>
									</a>
								</li>
								<li><a href="history.html" title="History">
									<span class="nav_icon">
										<span class="icon icon_history"></span>
									</span>
									<span class="nav_text">
										history
									</span>
								</a>
								</li>
							</ul>
							<ul class="nav_playlist">
								<li><a href="feature_playlist.html" title="connection">
									<span class="nav_icon">
										<span class="icon icon_fe_playlist"></span>
									</span>
									<span class="nav_text">
										connection
									</span>
								</a>
								</li>
								<li><a href="add_playlist.html" title="creer compte">
									<span class="nav_icon">
										<span class="icon icon_c_register"></span>
									</span>
									<span class="nav_text">
										creer compte
									</span>
								</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</>
		)
	}
