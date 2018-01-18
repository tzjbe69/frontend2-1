/* global $ Search  */

$(document).ready(function(){
    
    var searchModel = new Search();
    
    $('#search-form').submit(function(event){
        event.preventDefault();
        
        var input = $('#query').val();
        
        searchModel.title=input;
        
        searchModel.searchMovies()
        .then(makePagination)
        .then(displaySearchMovies);
        
    });
    
    
    function displaySearchMovies(response){
        var container = document.getElementById("search-results");
        var template= document.getElementById("template");
        document.getElementsByClassName('article')[0].innerHTML = "";
        container.innerHTML = "";
        
        // var response = response.results;
        for(var i = 0 ; i < response.length; i++){
            var results = template.cloneNode(true);
            var filmResult = response[i];
            // var htmlItem = filmResult.Title + ", " + filmResult.Year + ", " + filmResult.Runtime + ", " + filmResult.Genre;
            
            var filmTitle = results.querySelector(".search-title");
             filmTitle.innerHTML = filmResult.Title;
            
            var filmYear = results.querySelector(".search-year");
             filmYear.innerHTML = filmResult.Year;
            
            var filmRunTime = results.querySelector(".search-runtime");
             filmRunTime.innerHTML = filmResult.Runtime;
             
            var filmGenre = results.querySelector(".search-genre");    
             filmGenre.innerHTML = filmResult.Genre;
            
            
            if(filmResult != undefined){
            // container.append(htmlItem);
            container.append(results);
        }
    }
        
        
    }
    
    

});