const searchText = $("input")
const genreChecklist = $("#genre-checkbox-list");
const ratedChecklist = $("#rated-checkbox-list");
const sortBy = $("#sort-by");
const pickedMovies = $("#picked-movies-cont")

console.log(searchText)


searchText.on("keydown",(event)=>{
    console.log("input changed")
})

genreChecklist.on("click","input",(event)=>{
    console.log("genres changed")
})

ratedChecklist.on("click","input",(event)=>{
    console.log("rated changed")
})

sortBy.on("change",(event)=>{
    console.log("change in sort")
})




pickedMovies.on("click","button",(event)=>{
    console.log(event.target.innerText + "has been chosen");
})