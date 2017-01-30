// example: http://jsfiddle.net/JMPerez/0u0v7e1b/

// var clientID = "4f95b2df65354b3e9505871923b773f2";
// var clientSecret = "879c77cf7116410baefca1845b9affd1";
//
// var albumId = '2ODvWsOgouMbaA5xf0RkJe';

// set up an obect
var test = new XMLHttpRequest();
// set a GET request
test.open("GET", "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj");
// send the GET request

//test.setRequestHeader("Accept", "application/json");
//test.send(null); // maybe need "null", not sure (works without it)
// set a variable to the responseText and turn it into an Object
//test.setRequestHeader('Accept','text/JSON');
//test.send(null);

//console.log(test.response.album);


//var testObj = JSON.parse(test.responseText);
//console.log(testObj);

// var searchBox = document.getElementById('searchBox').onclick = function() {
//   this.style.boxShadow = "0px 3px 5px rgba(0,0,0, 0.5)";
// }

notes: fetch ( use promises (access from them when good) )
- the problem now is the code is running without getting what it needs, so you get nothing or undefined
- fetch will place the info in a placeholder, then once it gets the info, it will give me what I want ( something like that )