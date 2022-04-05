const picksContainer = $("#picked-movies-cont")

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