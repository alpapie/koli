import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import KoliList from "./list-koli";

export default function Content({getkoli}) {
    let [kolidji, setkolidji] = useState([])
    let [allkoli, setallkoli] = useState(false)
   
    let seeall = () => {
        setallkoli(true)
    }
    let getdata=async ()=>{
        await axios.get(`${process.env.REACT_APP_BASE_URL}/koli`).then(async (res)=>{
            console.log(res.data)
            setkolidji(res.data)
            console.log(res)
           }).catch((error)=>{
            console.log(error)
           })
    }
    useEffect( () =>{
        getdata()
    },[])
    return (
        <>
            {allkoli ? <KoliList getkoli={getkoli} /> : <main class="main">
                <div class="container-fluid">
                    <section class="row" >
                        <div class="col-12" >
                            <div class="hero " >
                                <div class="hero__slide hero__slide_bg" >
                                    <h1 class="hero__title">Rythmes puissants et mélodies évocatrices de la musique Peulh</h1>
                                    <p class="hero__text">
                                        Prendre le temps d'écouter la musique Peulh provenant de plusieurs pays d'Afrique
                                        de l'Ouest, notamment le Sénégal, la Guinée et le Mali... <br />
                                        Se laisser emporter par les mélodies envoûtantes et les rythmes effrénés du Hodu.
                                        Ces styles musicaux, qui sont profondément ancrés dans la culture et les traditions Peulh,
                                        offrent une expérience musicale unique et captivante qui mérite d'être découverte.
                                    </p>
                                    {/* <div class="hero__btns">
                                        <a href="#" class="hero__btn hero__btn--red">Buy now</a>
                                        <a href="#" class="hero__btn">Learn more</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end slide */}
                    {/* debut content */}
                    <section class="row row--grid">
                        <div class="col-12">
                            <div class="main__title">
                                <h2>Top Koli</h2>

                                <a style={{ cursor: "pointer" }} onClick={setallkoli} class="main__link">Voire plus <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
                            </div>
                        </div>
                        {
                            kolidji && kolidji.map((koli, index) => (
                                <div class="col-6 col-sm-4 col-lg-2" key={index}>
                                    <div class="album">
                                        <div class="album__cover">
                                            <img src={process.env.REACT_APP_BASE_URL+koli.artist.image} alt="" />
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
                            ))
                        }
                    </section>
                    <section class="row row--grid">
                        {/* <!-- title --> */}
                        <div class="col-12">
                            <div class="main__title">
                                <h2>News</h2>

                                <Link to={'/news'} class="main__link">See all <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></Link>
                            </div>
                        </div>
                        {/* <!-- end title -->

                        <!-- video post --> */}
                        
                            {
                            kolidji.map((koli, index) => (
                                index%2==0?
                                <div class="col-12 col-sm-6 col-lg-4">
                                    <div class="post">
                                        <a href="article.html" class="post__img">
                                            <img src="assets/img/posts/1.jpg" alt="" />
                                        </a>

                                        <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" class="post__video open-video">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,10.27,11,7.38A2,2,0,0,0,8,9.11v5.78a2,2,0,0,0,1,1.73,2,2,0,0,0,2,0l5-2.89a2,2,0,0,0,0-3.46ZM15,12l-5,2.89V9.11L15,12ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" /></svg> Watch backstage
                                        </a>

                                        <div class="post__content">
                                            <a href="#" class="post__category">Music</a>
                                            <h3 class="post__title"><a href="article.html">Foo Fighters share new live version of ‘No Son Of Mine’</a></h3>
                                            <div class="post__meta">
                                                <span class="post__date"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z" /></svg> 2 hours ago</span>
                                                <span class="post__comments"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" /></svg> 61</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :null
                            )
                            )
                            }           
                    </section>
                </div>
            </main>}

        </>
    )
}
