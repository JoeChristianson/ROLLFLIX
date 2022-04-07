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
const director =$("#director");
const writer = $("#writer")
const cast = $("#cast")
// TO DO: image id
const image = $("img")
const body =$("body")
const watchedEl = $("#watched-movies-cont")

const stars = `
    <div id="star-rating-container"><h4>Stars</h4></div>
    <h4 class="star-row" >
    <span data-rating="5" class="star">&#9733;</span>
    <span data-rating="4" class="star">&#9733;</span>
    <span data-rating="3" class="star">&#9733;</span>
    <span data-rating="2" class="star">&#9733;</span>
    <span data-rating="1" class="star">&#9733;</span>
    </h4>
`

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
            titles.push(filteredPicks[i].Title);
            console.log(filteredPicks[i].pickedDate)
        }        
    }
}

async function renderNew(titleInput){
    let movie;
    let old;
    if(titleInput==="random"){
        movie = await getRandomMovie();
    }
    else{
        for (let pick of picks){
            if (pick.Title===titleInput){
                movie=pick;
                old="true";
            }
        }
    }
    current=movie;
    title.text(movie.Title);
    year.text(movie.Year);
    rated.text(movie.Rated);
    genres.text(movie.Genre);
    runtime.text(movie.Runtime+" min");
    imdbRating.text("IMBD:  " + movie.imdbRating)
    plot.text(movie.Plot)
    director.text(movie.Director);
    writer.text(movie.Writer);
    cast.text(movie.Actors)


    image.attr("src",movie.Poster)
    // internetMovieRating.text(movie.)
    metacriticRating.text("Metascore:  " +movie.Metascore+"%");
    rottenTomatoesRating.text("Rotten Tomatoes:  " + movie.Ratings.filter(rating=>rating.Source === "Rotten Tomatoes")[0]?.Value);
    if (old){
        let watchedBtn = $("<button>");
        watchedBtn.text("Watched?")
        watchedBtn.on("click",e=>{
            const ratingsOpen = $("<div>")
            ratingsOpen.html(stars);
            title.append(ratingsOpen);
            // removeMovie(movie.Title);
            // watched.push(movie);
            // localStorage.setItem("watched",JSON.stringify(watched))
            // pullVals();
            // renderNew("random");
            
        })
        watchedBtn.addClass("watched-button")
        title.append(watchedBtn)
    }
}

const fillWatched = ()=>{
    watchedEl.html("")
    watched.forEach(movie=>{
        console.log(movie)
        let starLine = "";
        for(let i = 0;i<movie.rating;i++){
            starLine+="&#9733;"
        }
        const watchedLine = $("<div>")
        watchedLine.addClass("watched-line");
        watchedLine.html(`<div>${movie.current.Title}</div><div class="yellow">${starLine}</div>`)
        watchedEl.append(watchedLine);

    })
}