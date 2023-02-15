import React, { useState } from "react";

export default function Content() {
    let [kolidji, setkolidji] = useState(
        [{
            image: 'assets/img/artists/artist4.jpg',
            title: "Cro Magnon Man",
            artist: "Mushroom Records",
            mp3: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
            oga: "http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",

        }, {
            image: 'assets/img/artists/artist2.jpg',
            title: "Your Face",
            artist: "Ministry",
            mp3: "http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
            oga: "http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg",

        }, {
            image: 'assets/img/artists/artist3.jpg',
            title: "Cyber Sonnet",
            artist: "You Am I",
            mp3: "http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
            oga: "http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",

        }, {
            image: 'assets/img/artists/artist1.jpg',
            title: "Tempered Song",
            artist: "Shelter",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",

        }, {
            image: 'assets/img/artists/artist8.jpg',
            title: "Hidden",
            artist: "Bad Religion",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",

        }, {
            image: 'assets/img/artists/artist7.jpg',
            title: "Lentement",
            artist: "Apollo 440",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",

        }, {
            image: 'assets/img/artists/artist6.jpg',
            title: "Lismore",
            artist: "Bloodhound Gang",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg",

        }, {
            image: 'assets/img/artists/artist4.jpg',
            title: "The Separation",
            artist: "Friendly Fires ",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg",

        }, {
            image: 'assets/img/artists/artist5.jpg',
            title: "Beside Me",
            artist: "Friendly Fires ",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg",

        }, {
            image: 'assets/img/artists/artist3.jpg',
            title: "Bubble",
            artist: "Skunkhour",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",

        }, {
            image: 'assets/img/artists/artist2.jpg',
            title: "Stirring of a fool",
            artist: "The Meanies",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg",

        }, {
            image: 'assets/img/artists/artist1.jpg',
            title: "Partir",
            artist: "The Living End",
            mp3: "http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg",

        }]
    )

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
                                <h2>New Releases</h2>

                                <a href="releases.html" class="main__link">See all <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" /></svg></a>
                            </div>
                        </div>
                        {
                            kolidji && kolidji.map((koli, index) => (
                                <div class="col-6 col-sm-4 col-lg-2" key={index}>
                                    <div class="album">
                                        <div class="album__cover">
                                            <img src={koli.image} alt="" />
                                            <a href="release.html"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" /></svg></a>
                                            <span class="album__stat">
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" /></svg> 7</span>
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
