const searchText = $("input")
const genreChecklist = $("#genre-checkbox-list");
const ratedChecklist = $("#rated-checkbox-list");
const sortBy = $("#sort-by");
const pickedMovies = $("#picked-movies-cont")

console.log(searchText)


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
    console.log(event.target.innerText + "has been chosen");
})
