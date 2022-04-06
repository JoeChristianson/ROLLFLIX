// var checkList = document.getElementById('list2');
// checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
//   if (checkList.classList.contains('visible'))
//     checkList.classList.remove('visible');
//   else
//     checkList.classList.add('visible');
// }


// const fillDummyPicks = async ()=>{
//   await getRandomMovie();
//   addMovieToPicks();
// }

// for (let i = picks.length;i<10;i++){
//   fillDummyPicks()
// }

const searchParams = {search:"",
                      genres:["Action","Comedy","Drama","Fantasy","Horror","Romance","Western","Sci-Fi","Thriller"],
                      ratings:["G","PG","PG-13","R","NR","Passed","N/A","NA","Not Rated","Approved","TV-PG"],
                      sortProperty:"pickedDate",
                      descending:true};
// renderPicksSp(searchParams)
renderPicksSp(searchParams);
renderNew("random")