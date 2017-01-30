// example: http://jsfiddle.net/JMPerez/0u0v7e1b/

// var clientID = "4f95b2df65354b3e9505871923b773f2";
// var clientSecret = "879c77cf7116410baefca1845b9affd1";
//
// var albumId = '2ODvWsOgouMbaA5xf0RkJe';

var uri = "https://api.spotify.com/v1/search?q=the+killers&type=album";

// create shadow when clicking the search box
var searchBox = document.getElementById('searchBox').onclick = function() {
  this.style.boxShadow = "0px 3px 5px rgba(0,0,0, 0.5)";
}

fetch(uri).then(function(response) {
  return response.json();
}).then(function(response) {
  console.log("response in the second then:",response);

  // get the results div from index.html
  var resultsDiv = document.querySelector('#results');
  var musicData = response;
  var albumImg = musicData.albums.items[0].images[0].url;


  // need to display data from the response param
  var img = document.querySelector('.main-img');
  img.src=albumImg;

  var index = 0;
  while( !(musicData.albums.items[index].images[0].url) ) {
    console.log("working");
    index++;
  }

});
// notes: fetch ( use promises (access from them when good) )
// - the problem now is the code is running without getting what it needs, so you
//   get nothing or undefined
// - fetch will place the info in a placeholder, then once it gets the info, it
//   will give me what I want ( something like that )
