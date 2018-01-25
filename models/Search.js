/* global $ fetch*/
function Search(){
  this.title="";
  this.year = null;
  this.runtime=null;
  this.genre="";
  this.languag="";
  this.country="";
  this.poster="";
  this.imdbRating=null;
  this.imdbVotes=null;
  this.imdbID=null;
  this.type="";
  this.search="";
  
}

Search.prototype.searchMovies = function(){
  const that = this;
  const searchURL= "https://ancient-caverns-16784.herokuapp.com/movies?Title=" + this.title;
  
  return fetch (searchURL, {
    method: "GET"
  }).then(function(response){
        console.log("Response: ", response);
        return response.json();
  }).then(function(response){
        console.log(response);
        that.title = response.title;
        return response;
  }).catch(function(err){
        console.log('Field does not exist: ' + err);
  }); 
  
  // return $.ajax(searchURL,{
  //     method: 'GET',
  //     success: response => {
  //       console.log("Response: ", response);
  //         // that.title=response.title;
  //     },
  //     error: err => {
  //         alert('Field does not exist' + err);
  //     }
  // }); 
};