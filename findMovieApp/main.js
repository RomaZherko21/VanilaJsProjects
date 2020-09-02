const API_URL = "https://www.omdbapi.com/";
const API_KEY = "3ef4ab9e";

function getMovies(trend, page = 1) {
  return new Promise((resolve, reject) => {
    // start global loading...
    // startLoading();

    let URL = `${API_URL}?apiKey=${API_KEY}&s=${trend}&page=${page}`;
    fetch(URL)
      .then((response) => response.json())
      .then((res) => {
        resolve({
          movies: res.Search || [],
          totalResults: res.totalResults || 0,
        });
      })
      .catch((err) => {
        reject(err);
      });
    // .finally(() => {
    //     // stop global loading
    //     stopLoading()
    // })
  });
}

function getSingleMovie(id) {
  return new Promise((resolve, reject) => {
    // start global loading...
    // startLoading();

    let URL = `${API_URL}?apiKey=${API_KEY}&i=${id}`;
    fetch(URL)
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
    // .finally(() => {
    //     // stop global loading
    //     stopLoading()
    // })
  });
}

function allMovies(value, page) {
  getMovies(value, page).then(({ movies = [], totalResult = 0 }) => {
    moviesList.innerHTML = "";
    movies.map(renderMovies);
  });
}

window.onload = () => {
  allMovies("Harry Potter", 1);
};

const movieInfo = document.querySelector("#movieInfo");

const moviesList = document.querySelector("#moviesList");

const result = document.querySelector("#result");
const page = document.querySelector("#page");

const search = document.querySelector("#searchInMovies");

const clearInput = document.querySelector("#clearInput");
clearInput.addEventListener("click", () => {
  search.value = "";
  moviesList.innerHTML = "";
});

const prevPage = document.querySelector("#prevPage");
const nextPage = document.querySelector("#nextPage");
let pageNum = 1;
prevPage.addEventListener("click", () => {
  if (pageNum > 1) allMovies(result.textContent, --pageNum);
  page.innerHTML = pageNum;
});

nextPage.addEventListener("click", () => {
  allMovies(result.textContent, ++pageNum);
  page.innerHTML = pageNum;
});

search.addEventListener("input", (event) => {
  result.textContent = `${event.target.value}`;
  pageNum = 1;
  page.innerHTML = pageNum;
  allMovies(event.target.value, pageNum);
});

function renderMovies(item) {
  let div = document.createElement("div");
  div.className = "movie";
  console.log();
  if (item.Poster == "N/A")
    item.Poster =
      "https://in.bmscdn.com/iedb/movies/images/website/poster/large/kuber--marathi--et00015314-24-03-2017-18-37-59.jpg";
  moviesList.innerHTML += `<div class="movie" show-id = ${item.imdbID}>
    <img src=${item.Poster}
        alt="">
    <h2>${item.Title}</h2>
    <p>${item.year}-IMDB</p>
</div>`;
}

moviesList.addEventListener("click", (event) => {
  if (
    event.target.className !== "moviesList" &&
    !event.target.closest(".movieInfo")
  ) {
    getSingleMovie(event.target.closest(".movie").getAttribute("show-id")).then(
      (movieObj) => {
        showFullInfo(movieObj);
      }
    );
    // movieInfo.style.display = "block";
  }
});

function showFullInfo(item) {
  console.log(moviesList.querySelector('.movieInfo'))
  console.log(Boolean(moviesList.querySelector('.movieInfo')))
if(moviesList.querySelector('.movieInfo')) moviesList.querySelector('.movieInfo').remove();
  let div = document.createElement("div");
  div.className = "movieInfo";
  div.style.display = "block";

  let i = document.createElement("i");
  i.className = "fas fa-times";
  i.id = "closeInfo";

  if (item.Poster == "N/A")
  item.Poster =
    "https://in.bmscdn.com/iedb/movies/images/website/poster/large/kuber--marathi--et00015314-24-03-2017-18-37-59.jpg";

  let showImg = document.createElement("div");
  showImg.className = "showImg";
  showImg.innerHTML = `<img src=${item.Poster}
  alt="">`;

  div.innerHTML = ` <div class="showText">
  <h2>${item.Title}</h2><span class="rate">${item.imdbRating} / 10</span>   
  <p><span>Reliazed</span>:${item.Released} - Runtime:${item.Runtime}</p>
  <p><span>Genre</span>:${item.Genre}</p>
  <p><span>Director</span>:${item.Director} - <span>Writer</span>:${item.Writer}</p>
  <p><span>Summary:</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
  </div>`;

  showImg.prepend(i);
  div.prepend(showImg);

  i.addEventListener("click", () => {
    div.style.display = "none";
  });
  moviesList.append(div);
}
