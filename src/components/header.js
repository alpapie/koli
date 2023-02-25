import React, { useState } from "react";
import { Link } from "react-router-dom";
import Isauth from "./utils/isauth";

export default function Header({ setsidebarmobile, sidebarmobile ,auth}) {
	// let [searchform,setarchform]=useState("")
	let [issearchform, setisarchform] = useState(false)

	return (
		<>
			<header class="header">
				<div class="header__content">
					<div class="header__logo">
						<a href="/">
							<img src="assets/img/logo.svg" alt="" />
						</a>
					</div>



					<form action="#" class={issearchform ? "header__search header__search--active" : "header__search"}>
						<input type="text" placeholder="Artist, Pays" />
						<button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
						<button onClick={() => { setisarchform(!issearchform) }} type="button" class="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" /></svg>
						</button>
					</form>

					<div class="header__actions">
						{auth?
						<nav class="header__nav">
							<Link to={'/admin'}>Liste Kolis</Link>
							<Link to={'/admin'}></Link>
						</nav>
						:""}
						<div class="header__action header__action--search">
							<button onClick={() => { setisarchform(!issearchform) }} class="header__action-btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
						</div>
						<div class="header__action header__action--signin">
							{!auth?
							<Link class="header__action-btn" to={'/login'}>
								<span>Connection</span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.5,15.1a1,1,0,0,0-1.34.45A8,8,0,1,1,12,4a7.93,7.93,0,0,1,7.16,4.45,1,1,0,0,0,1.8-.9,10,10,0,1,0,0,8.9A1,1,0,0,0,20.5,15.1ZM21,11H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H21a1,1,0,0,0,0-2Z" /></svg>
							</Link>:
							<Link class="header__action-btn text-danger" to={'/logout'}>
								<span>Logout</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm5.14 2.86a.99.99 0 0 0-.01 1.39c1.13 1.2 1.83 2.8 1.87 4.57c.09 3.83-3.08 7.13-6.91 7.17A6.981 6.981 0 0 1 5 12c0-1.84.71-3.51 1.87-4.76c.37-.39.37-1-.01-1.38a.993.993 0 0 0-1.43.02A8.92 8.92 0 0 0 3 11.74c-.14 4.88 3.83 9.1 8.71 9.25c5.1.16 9.29-3.93 9.29-9c0-2.37-.92-4.51-2.42-6.11c-.38-.41-1.04-.42-1.44-.02z"/></svg>
							</Link>
							}
						</div>
					</div>

					<button class={!sidebarmobile ? "header__btn" : "header__btn header__btn--active"} onClick={() => { setsidebarmobile(!sidebarmobile) }} type="button">
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</header>
		</>
	)
}
