import React, { useState } from "react";

export default function Content({setaudio}) {
    let [kolidji, setkolidji] = useState(
        [{
           id:1,
            image: 'assets/img/artists/artist4.jpg',
            title: "Cro Magnon Man",
            artist: "Mushroom Records",
            mp3: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
            oga: "http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",

        }, {
           id:2,
            image: 'assets/img/artists/artist2.jpg',
            title: "Your Face",
            artist: "Ministry",
            mp3: "http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
            oga: "http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg",

        }, {
           id:3,
            image: 'assets/img/artists/artist3.jpg',
            title: "Cyber Sonnet",
            artist: "You Am I",
            mp3: "http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
            oga: "http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",

        }, {
           id:4,
            image: 'assets/img/artists/artist1.jpg',
            title: "Tempered Song",
            artist: "Shelter",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",

        }, {
           id:5,
            image: 'assets/img/artists/artist8.jpg',
            title: "Hidden",
            artist: "Bad Religion",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",

        }, {
           id:6,
            image: 'assets/img/artists/artist7.jpg',
            title: "Lentement",
            artist: "Apollo 440",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",

        }, {
           id:7,
            image: 'assets/img/artists/artist6.jpg',
            title: "Lismore",
            artist: "Bloodhound Gang",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg",

        }, {
           id:8,
            image: 'assets/img/artists/artist4.jpg',
            title: "The Separation",
            artist: "Friendly Fires ",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg",

        }, {
           id:9,
            image: 'assets/img/artists/artist5.jpg',
            title: "Beside Me",
            artist: "Friendly Fires ",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg",

        }, {
           id:10,
            image: 'assets/img/artists/artist3.jpg',
            title: "Bubble",
            artist: "Skunkhour",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",

        }, {
           id:11,
            image: 'assets/img/artists/artist2.jpg',
            title: "Stirring of a fool",
            artist: "The Meanies",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg",

        }, {
           id:12,
            image: 'assets/img/artists/artist1.jpg',
            title: "Partir",
            artist: "The Living End",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg",

        }]
    )
    let getkoli=(id)=>{
        setaudio(kolidji[id-1])
    }

    return (
        <>
            <main class="main">
                <div class="container-fluid">
                    <section class="row" >
                        <div class="col-12" >
                            <div class="hero " >
                                <div class="hero__slide hero__slide_bg" >
                                    <h1 class="hero__title">Rythmes puissants et mélodies évocatrices de la musique Peulh</h1>
                                    <p class="hero__text">
                                    Prendre le temps d'écouter la musique Peulh provenant de plusieurs pays d'Afrique 
                                    de l'Ouest, notamment le Sénégal, la Guinée et le Mali... <br/>
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
                    {/* debut conten */}
                    <section class="row row--grid">
                        <div class="col-12">
                            <div class="main__title">
                                <h2>Top Koli</h2>

                                <a href="releases.html" class="main__link">Voire plus <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
                            </div>
                        </div>
                        {
                            kolidji && kolidji.map((koli, index) => (
                                <div class="col-6 col-sm-4 col-lg-2" key={index}>
                                    <div class="album">
                                        <div class="album__cover">
                                            <img src={koli.image} alt="" />
                                            <a style={{ cursor: "pointer" }}  onClick={getkoli.bind(this,koli.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg></a>
                                            <span class="album__stat">
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,13.18V11A8,8,0,0,0,4,11v2.18A3,3,0,0,0,2,16v2a3,3,0,0,0,3,3H8a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H6V11a6,6,0,0,1,12,0v2H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h3a3,3,0,0,0,3-3V16A3,3,0,0,0,20,13.18ZM7,15v4H5a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1Zm13,3a1,1,0,0,1-1,1H17V15h2a1,1,0,0,1,1,1Z" /></svg> 4 731</span>
                                            </span>
                                        </div>
                                        <div class="album__title">
                                            <h3><a href="release.html">{koli.title}</a></h3>
                                            <span><a href="artist.html">{koli.artist}</a></span>
                                        </div>
                                    </div>
                                </div>

                            ))

                        }
                    </section>

                </div>
            </main>
            
        </>
    )
}
