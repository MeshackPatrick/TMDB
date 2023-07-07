document.addEventListener("DOMContentLoaded", () => {
    //API URL
    const apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=8613e44dd729f371ce69257fa7c24c0c";
    const imgPath = "https://image.tmdb.org/t/p/w500/";
    const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=8613e44dd729f371ce69257fa7c24c0c&query=";
    // DOM Elements
    const main = document.getElementById('content');
    const form = document.getElementById('form');
    const search = document.getElementById('search');
    //fetching and display movies
    getMovie(apiUrl);

    async function getMovie(url) {
        const response = await fetch(url);
        const responseData = await response.json();
        console.log(responseData);
        showMovies(responseData.results);
    }

    function showMovies(movies) {
        main.innerHTML = "";
        movies.forEach((movie) => {
            const { poster_path, title, vote_average, overview ,id} = movie;
            const movieEl = document.createElement("div");
            movieEl.classList.add("movie");
            movieEl.innerHTML = `
                <img src="${imgPath + poster_path}" alt="${title}"/>
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                    <button class="trailer-button" data-id="${id}">Watch Trailer</button>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>`;
            main.appendChild(movieEl);

            // Add event listeners for hovering over the movie element
            movieEl.addEventListener("mouseenter", ()=>{
                if (!movieEl.classList.contains("trailer-playing")){
                    movieEl.querySelector(".overview").classList.add("show-overview")
                }
            })
            movieEl.addEventListener("mouseleave", ()=>{
                if (!movieEl.classList.contains("trailer-playing")){
                    movieEl.querySelector(".overview").classList.remove("show-overview")
                }
            })
            //add event listener for playing trailer
            const trailerButton=movieEl.querySelector(".trailer-button")
            trailerButton.addEventListener("click",()=>{
                playTrailer(movieEl,id)
            })
        })
    }
    //getting movies rating votes
    function getClassByRate(vote) {
        if (vote >= 8) {
            return "green";
        } else if (vote >= 5) {
            return "orange";
        } else {
            return "red";
        }
    }
    function playTrailer( movieEL,movieId) {
        const trailerUrl = `https://www.youtube.com/embed/${movieId}`
        const trailerFrame = document.createElement("iframe")
        trailerFrame.src = trailerUrl
        trailerFrame.width = "560"
        trailerFrame.height = "315"
        trailerFrame.frameBorder = 0
        trailerFrame.allowFullscreen = true

        const modalContent = document.createElement("div")
        modalContent.classList.add("modal-content")
        modalContent.appendChild(trailerFrame)

        const closeButton = document.createElement("button")
        closeButton.classList.add("close-button")
        closeButton.textContent = "Close"

        const modal = document.createElement("div")
        modal.classList.add("modal")
        modal.appendChild(modalContent)
        modal.appendChild(closeButton)

        closeButton.addEventListener("click", () => {
            modal.remove()
            movieEL.classList.remove("trailer-play")
            movieEL.querySelector('.overview').classList.add("show-overview")
        })
        document.body.appendChild(modal)
        movieEL.classList.add("trailer-playing")
        movieEL.querySelector(".overview").classList.remove("show-overview")
    }

    // searching for movie ,person show from the api
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const searchTerm = search.value;
        if (searchTerm) {
            getMovie(searchApi + searchTerm);
            search.value = "";
        }
    });
});
