// var checkList = document.getElementById('list2');
// checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
//   if (checkList.classList.contains('visible'))
//     checkList.classList.remove('visible');
//   else
//     checkList.classList.add('visible');
// }


const fillDummyPicks = async ()=>{
  await getRandomMovie();
  addMovieToPicks();
}

for (let i = picks.length;i<10;i++){
  fillDummyPicks()
}

const searchParams = {search:"",
                      genres:["Crime","Comedy","Action"],
                      ratings:["G","PG","R"],
                      sortProperty:"imdbRating",
                      descending:true};
renderPicksSp(searchParams)
renderNew()