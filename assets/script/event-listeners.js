const searchText = $("input")
const genreChecklist = $("#genre-checkbox-list");
const ratedChecklist = $("#rated-checkbox-list");
const sortBy = $("#sort-by");
const pickedMovies = $("#picked-movies-cont")
const thumbUp = $(".thumbUp");
const randomMovie = $(".randomMovie");
const thumbDown = $(".thumbDown")

thumbUp.on("click",e=>{
    addMovieToPicks();
    pullVals();
    renderNew("random");
})

thumbDown.on("click",e=>{
    renderNew("random");
})

randomMovie.on("click",e=>{
    renderNew("random");
})

searchText.on("keydown",(event)=>{
    pullVals()
})

genreChecklist.on("click","input",(event)=>{
    pullVals()
})

ratedChecklist.on("click","input",(event)=>{
    pullVals()
})

sortBy.on("change",(event)=>{
    pullVals()
})


pickedMovies.on("click","button",(event)=>{
    renderNew(event.target.textContent);
})

body.on("click",".star",e=>{
    const rating = e.target.dataset.rating;
    console.log(rating)
    removeMovie(current.Title);
    watched.push({current,rating});
    localStorage.setItem("watched",JSON.stringify(watched))
    pullVals();
    renderNew("random");
})