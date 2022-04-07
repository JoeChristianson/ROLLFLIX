// main scripting file for start of index.html
const searchParams = {search:"",
                      genres:["Action","Comedy","Drama","Fantasy","Horror","Romance","Western","Sci-Fi","Thriller"],
                      ratings:["G","PG","PG-13","R","NR","Passed","N/A","NA","Not Rated","Approved","TV-PG"],
                      sortProperty:"pickedDate",
                      descending:true};
renderPicksSp(searchParams);
renderNew("random")

fillWatched()
