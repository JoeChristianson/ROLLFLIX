function pullVals() {

    var genreEls = document.querySelectorAll("#genre-checkbox-list input:checked");
    var ratingEls = document.querySelectorAll("#rated-checkbox-list input:checked");
    var searchEl = document.querySelector("input");
    var sortEl = document.querySelector("select");
    var directionEl = document.querySelector("#direction")
    
    // console.log(genreEls);
    // console.log(ratingEls);
    // console.log(searchEl);
    // console.log(sortEl);

    var searchObj = {};
    searchObj.search = searchEl.value;
    searchObj.sortProperty = sortEl.value;

    searchObj.genres = [];
    for (let i=0;i<genreEls.length;i++){
        searchObj.genres.push(genreEls[i].value);
    }
    
    searchObj.ratings = [];
    for (let j=0; j<ratingEls.length; j++){
        searchObj.ratings.push(ratingEls[j].value);
        if(ratingEls[j].value === "NR"){
            searchObj.ratings.push("Passed","N/A","Not Rated","Approved","TV-PG")
        }
    }
    console.log(searchObj);
    var direction = directionButton.data("direction")
    searchObj.descending = (direction==="descending")?true:false;
    renderPicksSp(searchObj);
    console.log(searchObj);
}
