const picksContainer = $("#picked-movies-cont")

const renderPicks = ({search,genre,rated,sortProperty,sortDirection})=>{
    let filteredPicks = fullSearch(search)
    filteredPicks = filterMovies("Genre",genre,filteredPicks);
    if (rated=""){
        filteredPicks = strictFilterMovies("Rated",rated,filteredPicks)
    }
    sortMovies(sortProperty,sortDirection,filteredPicks);
    for (let i = 0;i<(Math.min(filteredPicks.length,10));i++){
        const btn = $("<button>")
        btn.text(filteredPicks[i].Title);
        picksContainer.append(btn);
    }
}

