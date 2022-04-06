const APIkey = "72f4250f";
const baseURL = `https://www.omdbapi.com/?apikey=${APIkey}&type=movie&t=`;
// picks are the movies that have been saved
let picks = JSON.parse(localStorage.getItem("picks")) || [];
let watched = JSON.parse(localStorage.getItem("watched")) || [];
// this is the currently displayed movie object
let current = null;
const a = [4,2,1]
const test = [4,3,7,6,44]


const getRandomMovie = async ()=>{
    // this gets the random movie
    const rResp = await fetch("https://k2maan-moviehut.herokuapp.com/api/random");
    const rData = await rResp.json();
    movieTitle = rData.name.toLowerCase()
    movieTitle.replace(" ","_")
    // this gets more details about the movie
    const response = await fetch(baseURL+movieTitle)
    const data = await response.json();
    if(!data.Title){
        await getRandomMovie()
    }
    else {
    current = data;
    current.Runtime = current.Runtime.split(" ")[0]
    }
    return current;
}

const addMovieToPicks = ()=>{
    current.pickedDate = new Date().getTime();
    picks.push(current);
    localStorage.setItem("picks",JSON.stringify(picks));
    getRandomMovie();
}

// properties can be Year, Title, imdbRating, MetaScore descending is boolean;
const sortMovies = (property,descending,arr)=>{
    if (descending){
        arr.sort((a, b) => {
             return a[property]>b[property] ? -1 : 1})
    }
    else{arr.sort((a, b) => {
         return a[property]>b[property] ? 1 : -1})};
}

function filterMovies(property,string,array){
    const filteredPicks = array.filter(pick=>{
        return pick[property].includes(string)
    }) 
    return filteredPicks;
}

function strictFilterMovies(property,string,array){
    const filteredPicks = array.filter(pick=>{
        return pick[property] === string;
    }) 
    return filteredPicks;
}

const fullText = (obj)=>{
    let text = ""
    for (let prop in obj){
        text+=obj[prop];
    }
    return text;
}

const fullSearch = string=>{
    const filteredPicks = picks.filter((pick)=>{
        return fullText(pick).includes(string);
    })
    return (filteredPicks)    
}

const removeMovie=(title)=>{
    console.log(title)
    picks = picks.filter(pick=>pick.Title != title);
    localStorage.setItem("picks",JSON.stringify(picks))
    return picks;
}