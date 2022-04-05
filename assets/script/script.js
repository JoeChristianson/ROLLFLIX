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

const searchParams = {search:"",genre:"All Genres",rated:"All Ratings",sortProperty:"imdbRating",descending:true};
renderPicks(searchParams)
