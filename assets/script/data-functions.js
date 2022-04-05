const APIkey = "72f4250f";
const baseURL = `https://www.omdbapi.com/?apikey=${APIkey}&type=movie&t=`;
// picks are the movies that have been saved
const picks = JSON.parse(localStorage.getItem("picks")) || [];
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
    console.log(data)
    if(!data.Title){
        await getRandomMovie()
    }
    else {
        console.log(`${data.Title} has been randomly chosen and should be displayed`)
    current = data;
    }
    return current;
}

const addMovieToPicks = ()=>{
    picks.push(current);
    localStorage.setItem("picks",JSON.stringify(picks));
    console.log(`${picks[picks.length-1].Title} has been added to the picks`)
    getRandomMovie();
}

// properties can be Year, Title, imdbRating, MetaScore descending is boolean;
const sortMovies = (property,descending,arr)=>{
    console.log(descending)
    if (descending){
        arr.sort((a, b) => {
             return a[property]>b[property] ? -1 : 1})
    }
    else{arr.sort((a, b) => {
         return a[property]>b[property] ? 1 : -1})};
        console.log(`These are the picks sorted by ${property} in ${descending?"descending":"ascending"} order`)
    console.log(arr)
}

function filterMovies(property,string,array){
    const filteredPicks = array.filter(pick=>{
        return pick[property].includes(string)
    }) 
    console.log(filteredPicks);
    return filteredPicks;
}

function strictFilterMovies(property,string,array){
    const filteredPicks = array.filter(pick=>{
        return pick[property] === string;
    }) 
    console.log(filteredPicks);
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
    console.log(`These are the picks that include '${string}'`)
    console.log(filteredPicks);
    return (filteredPicks)    
}