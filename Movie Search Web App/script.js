const API_KEY = "api_key=9228b9b13729533ebeb8178c6a24748c";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const main = document.querySelector('#main')
const form = document.querySelector('#form')
const search = document.querySelector('#search')
const searchURL = BASE_URL + '/search/movie?' + API_KEY

const defaultImageURL = 'https://th.bing.com/th?id=OIP.31POoSoTy0gP87K75ATnnQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'

getMovies(API_URL);

// function getMovies(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         showMovies(data.results);
//     });
// }

async function getMovies(url){
  try {
    const response = await fetch(url)
    const data = await response.json()
    showMovies(data.results)
  } catch (error) {
      serverLose()
  }
}

function serverLose(){
  const div = document.createElement('div')
  div.innerHTML = `<h1 class="serverError">Server Problem</h1>`
  main.appendChild(div)
}

function showMovies(data) {
    main.innerHTML = ''
  data.forEach((movie) => {

    const {title, poster_path, vote_average, overview} = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <img
        src="${IMG_URL+poster_path}"
        alt="${title}"
      />

      <div class="movieInfo">
        <h3>${title}</h3>
        <span class="${getColor(vote_average)}">${vote_average.toFixed(2)}</span>
      </div>

      <div class="overView">
          <h3>Overview</h3>
        ${overview}
      </div>
        `;

        main.appendChild(movieEl)
  });
}

function getColor(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const searchTerm = search.value 

    if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
    }

})