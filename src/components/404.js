import React from "react";
import { Link } from "react-router-dom";
 export default function Page404(){
    return (
        <>
            <main class="main">
		<div class="container-fluid">
			<div class="row row--grid">
				{/* <!-- breadcrumb --> */}
				<div class="col-12">
					<ul class="breadcrumb">
						<li class="breadcrumb__item"><a href="index.html">Home</a></li>
						<li class="breadcrumb__item breadcrumb__item--active">Error 404</li>
					</ul>
				</div>
				{/* <!-- end breadcrumb -->

				<!-- error --> */}
				<div class="col-12">
					<div class="page-404">
						<div class="page-404__wrap">
							<div class="page-404__content">
								<h1 class="page-404__title">404</h1>
								<p class="page-404__text">Cettepage n'estpas disponible!</p>
								<Link to={'/'} class="page-404__btn">go back</Link>
								
							</div>
						</div>
					</div>
				</div>
				{/* <!-- end error --> */}
			</div>
		</div>
	</main>
        </>
    )
}