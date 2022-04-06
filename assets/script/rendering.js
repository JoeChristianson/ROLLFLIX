const picksContainer = $("#picked-movies-cont")
const title = $("#title");
const year = $("#year");
const rated = $("#rated")
const genres = $("#genre")
const runtime = $("#runtime")
const internetMovieRating = $("#internetMovie");
const rottenTomatoesRating = $("#rottenTomatoes");
const metacriticRating = $("#metacritic")
const imdbRating = $("#imdbRating");
const plot = $("#plot")
// TO DO: image id
const image = $("img")

const renderPicks = ({search,genre,rated,sortProperty,descending})=>{
    picksContainer.html("")
    let filteredPicks = fullSearch(search)
    if (genre!="All Genres"){
        filteredPicks = filterMovies("Genre",genre,filteredPicks);
    }
    if (rated!="All Ratings"){
        filteredPicks = strictFilterMovies("Rated",rated,filteredPicks)
    }
    sortMovies(sortProperty,descending,filteredPicks);
    for (let i = 0;i<(Math.min(filteredPicks.length,10));i++){
        const btn = $("<button>")
        btn.text(filteredPicks[i].Title);
        picksContainer.append(btn);
    }
}

const renderPicksSp = ({search,genres,ratings,sortProperty,descending})=>{
    picksContainer.html("")
    let filteredPicks = fullSearch(search);
    let newPicks = []
    for(let genre of genres){
        const picksToAdd = filterMovies("Genre",genre,filteredPicks);
        newPicks.concat(picksToAdd)
        picksToAdd.forEach(pick=>{
            newPicks.push(pick)
        })
    }
    filteredPicks = [...newPicks];
    newPicks = [];
    for(let rating of ratings){
        const picksToAdd = strictFilterMovies("Rated",rating,filteredPicks);
        newPicks.concat(picksToAdd)
        picksToAdd.forEach(pick=>{
            newPicks.push(pick)
        })
    }
    filteredPicks = [...newPicks];
    sortMovies(sortProperty,descending,filteredPicks);
    const titles = []
    for (let i = 0;i<(Math.min(filteredPicks.length,100));i++){
        const btn = $("<button>")
        btn.text(filteredPicks[i].Title);
        btn.addClass("past-picks-buttons");
        if (!titles.includes(filteredPicks[i].Title)){
            picksContainer.append(btn);
            titles.push(filteredPicks[i].Title)
        }        
    }
}

async function renderNew(titleInput){
    let movie;
    if(titleInput==="random"){
        movie = await getRandomMovie();
    }
    else{
        for (let pick of picks){
            if (pick.Title===titleInput){
                movie=pick;
            }
        }
    }
    title.text(movie.Title);
    year.text(movie.Year);
    rated.text(movie.Rated);
    genres.text(movie.Genre);
    runtime.text(movie.Runtime);
    imdbRating.text("IMBD:  " + movie.imdbRating)
    plot.text(movie.Plot)
    image.attr("src",movie.Poster)
    // internetMovieRating.text(movie.)
    metacriticRating.text("Metascore:  " +movie.Metascore+"%");
    rottenTomatoesRating.text("Rotten Tomatoes:  " + movie.Ratings.filter(rating=>rating.Source === "Rotten Tomatoes")[0]?.Value);
}