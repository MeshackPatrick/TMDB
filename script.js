document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=8613e44dd729f371ce69257fa7c24c0c";
    const imgPath = "https://image.tmdb.org/t/p/w500/";
    const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=8613e44dd729f371ce69257fa7c24c0c&query=";

    const main = document.getElementById('content');
    const form = document.getElementById('form');
    const search = document.getElementById('search');

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
            const { poster_path, title, vote_average, overview } = movie;
            const movieEl = document.createElement("div");
            movieEl.classList.add("movie");
            movieEl.innerHTML = `
                <img src="${imgPath + poster_path}" alt="${title}"/>
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview:</h3>
                    ${overview}
                </div>`;
            main.appendChild(movieEl);

            // Add event listeners for hovering over the movie element
            movieEl.addEventListener("mouseenter", () => {
                movieEl.querySelector('.overview').classList.add("show-overview");
            });

            movieEl.addEventListener("mouseleave", () => {
                movieEl.querySelector('.overview').classList.remove("show-overview");
            });
        });
    }

    function getClassByRate(vote) {
        if (vote >= 8) {
            return "green";
        } else if (vote >= 5) {
            return "orange";
        } else {
            return "red";
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const searchTerm = search.value;
        if (searchTerm) {
            getMovie(searchApi + searchTerm);
            search.value = "";
        }
    });
});
