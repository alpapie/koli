import React, { useState } from "react";

export default function Sidebar() {
	return (
		<>
			<div class="sidebar">

				<div class="sidebar__logo">
					<img src="img/logo.svg" alt="" />
				</div>
				<ul class="sidebar__nav">
					<li class="sidebar__nav-item">
						<a href="index.html" class="sidebar__nav-link sidebar__nav-link--active"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"></path></svg> <span>Home</span></a>
					</li>

					<li class="sidebar__nav-item">
						<a href="artists.html" class="sidebar__nav-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z" /></svg> <span>Artists</span></a>
					</li>

					<li class="sidebar__nav-item">
						<a href="releases.html" class="sidebar__nav-link">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
</svg>
							<span>pays</span></a>
					</li>
					
					<li class="sidebar__nav-item">
						<a href="news.html" class="sidebar__nav-link">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,14H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0-4H10a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm4-6H17V3a1,1,0,0,0-2,0V4H13V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H4A1,1,0,0,0,3,5V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V5A1,1,0,0,0,20,4ZM19,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V6H7V7A1,1,0,0,0,9,7V6h2V7a1,1,0,0,0,2,0V6h2V7a1,1,0,0,0,2,0V6h2Z" /></svg> <span>News</span></a>
					</li>
					<li class="sidebar__nav-item" >
						<a href="store.html" class="sidebar__nav-link">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5,15.1a1,1,0,0,0-1.34.45A8,8,0,1,1,12,4a7.93,7.93,0,0,1,7.16,4.45,1,1,0,0,0,1.8-.9,10,10,0,1,0,0,8.9A1,1,0,0,0,20.5,15.1ZM21,11H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H21a1,1,0,0,0,0-2Z"/></svg>
											<span>connection</span></a>
					</li>
					{/* <li class="sidebar__nav-item" >
						<a href="store.html" class="sidebar__nav-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z" /></svg> <span>Sign in</span></a>
					</li> */}
				</ul>

			</div>
			<div class="player">
				<div class="player__cover">
					<img src="assets/img/covers/cover.svg" alt="" />
				</div>

				<div class="player__content">
					<span class="player__track"><b class="player__title">Epic Cinematic</b> – <span class="player__artist">AudioPizza</span></span>
					<div class="plyr__controls">
						<div class="plyr__actions">
							<button type="button" class="plyr__control plyr__control--prev">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.28,3.43a3.23,3.23,0,0,0-3.29,0L8,8.84V6A3,3,0,0,0,2,6V18a3,3,0,0,0,6,0V15.16l9,5.37a3.28,3.28,0,0,0,1.68.47,3.24,3.24,0,0,0,1.61-.43,3.38,3.38,0,0,0,1.72-3V6.42A3.38,3.38,0,0,0,20.28,3.43ZM6,18a1,1,0,0,1-2,0V6A1,1,0,0,1,6,6Zm14-.42a1.4,1.4,0,0,1-.71,1.25,1.23,1.23,0,0,1-1.28,0L8.68,13.23a1.45,1.45,0,0,1,0-2.46L18,5.19A1.23,1.23,0,0,1,18.67,5a1.29,1.29,0,0,1,.62.17A1.4,1.4,0,0,1,20,6.42Z" /></svg>
							</button>

							<button type="button" class="plyr__control" data-plyr="play">
								<svg class="icon--pressed" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z"></path></svg>
								<svg class="icon--not-pressed" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path></svg>
							</button>

							<button type="button" class="plyr__control plyr__control--next">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,3a3,3,0,0,0-3,3V8.84L7,3.47a3.21,3.21,0,0,0-3.29,0A3.38,3.38,0,0,0,2,6.42V17.58a3.38,3.38,0,0,0,1.72,3A3.24,3.24,0,0,0,5.33,21,3.28,3.28,0,0,0,7,20.53l9-5.37V18a3,3,0,0,0,6,0V6A3,3,0,0,0,19,3ZM15.32,13.23,6,18.81a1.23,1.23,0,0,1-1.28,0A1.4,1.4,0,0,1,4,17.58V6.42a1.4,1.4,0,0,1,.71-1.25A1.29,1.29,0,0,1,5.33,5,1.23,1.23,0,0,1,6,5.19l9.33,5.58a1.45,1.45,0,0,1,0,2.46ZM20,18a1,1,0,0,1-2,0V6a1,1,0,0,1,2,0Z" /></svg>
							</button>
						</div>

						<div class="plyr__wrap">
							<div class="plyr__progress">
								<input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek" />
								<progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
								<span role="tooltip" class="plyr__tooltip">00:00</span>
							</div>

							<div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
						</div>

						<div class="plyr__wrap">
							<button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
								<svg class="icon--pressed" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.91,12l1.8-1.79a1,1,0,0,0-1.42-1.42l-1.79,1.8-1.79-1.8a1,1,0,0,0-1.42,1.42L17.09,12l-1.8,1.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l1.79-1.8,1.79,1.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" /></svg>
								<svg class="icon--not-pressed" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.66,6.34a1,1,0,0,0-1.42,1.42,6,6,0,0,1-.38,8.84,1,1,0,0,0,.64,1.76,1,1,0,0,0,.64-.23,8,8,0,0,0,.52-11.79ZM16.83,9.17a1,1,0,1,0-1.42,1.42A2,2,0,0,1,16,12a2,2,0,0,1-.71,1.53,1,1,0,0,0-.13,1.41,1,1,0,0,0,1.41.12A4,4,0,0,0,18,12,4.06,4.06,0,0,0,16.83,9.17Z" /></svg>
								<span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
								<span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
							</button>

							<div class="plyr__volume">
								<input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume" />
							</div>

							<a href="release.html" class="plyr__control" aria-label="Playlist">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,13H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm0-4H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" /></svg>
								<span class="plyr__tooltip" role="tooltip">Playlist</span>
							</a>
						</div>
						{/* </div>
                        <audio src="http://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3" id="audio" controls></audio> */}
					</div>
				</div>
			</div>
			<button class="player__btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.65,2.24a1,1,0,0,0-.8-.23l-13,2A1,1,0,0,0,7,5V15.35A3.45,3.45,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.86L20,9.17v4.18A3.45,3.45,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A1,1,0,0,0,21.65,2.24ZM5.5,20A1.5,1.5,0,1,1,7,18.5,1.5,1.5,0,0,1,5.5,20Zm13-2A1.5,1.5,0,1,1,20,16.5,1.5,1.5,0,0,1,18.5,18ZM20,7.14,9,8.83v-3L20,4.17Z" /></svg> Player</button>


		</>
	)
}
