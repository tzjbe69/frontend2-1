function Search(){
  this.title="";
  this.year = null;
  this.runtime=null;
  this.genre="";
  this.language="";
  this.country="";
  this.poster="";
  this.imdbRating=null;
  this.imdbVotes=null;
  this.imdbID=null;
  this.type="";
  this.search="";
}

Search.prototype.searchMovies = function(){
  var searchURL= "https://ancient-caverns-16784.herokuapp.com/movies";
  if (this.title !=="") {
    searchURL += "?Title=" + this.title;
  }
  //if .. others
  return searchURL;
};