var config = {
  apiKey: "AIzaSyAcH8o1HyoSno3hY7eR6DqX1CuR8OWj_TE",
  authDomain: "krave-7a2d2.firebaseapp.com",
  databaseURL: "https://krave-7a2d2.firebaseio.com",
  projectId: "krave-7a2d2",
  storageBucket: "krave-7a2d2.appspot.com",
  messagingSenderId: "8765155413"
};
firebase.initializeApp(config);

var database = firebase.database();

// / Document Ready //
$(document).ready(function() {
// $(".results-box").hide();
// api code //
var queryURL = "https://api.yelp.com/v3/businesses/search?term=store&location" + location + "&categories=liquor";

 // api key //
var apiKey = "3X8xKVE39_n-9lZYPfTjEZBbxQAWRqAWj_jhyXfvsXkFMbqc-C1C3wor3d5JUWJqOqGWxb3c4vhgrWpHtjiW_AR8d8z2vpf0Df91ijaUcTuWb4C6gyrbNfNDbwBWXHYx";

// "https://api.yelp.com/v3/businesses/search?q=&api_key=3X8xKVE39_n-9lZYPfTjEZBbxQAWRqAWj_jhyXfvsXkFMbqc-C1C3wor3d5JUWJqOqGWxb3c4vhgrWpHtjiW_AR8d8z2vpf0Df91ijaUcTuWb4C6gyrbNfNDbwBWXHYx";

//AJAX GET request to the queryURL //
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.yelp.com/v3/businesses/search?location=94521&=liquorstores&term=store&categories=liquor",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer 3X8xKVE39_n-9lZYPfTjEZBbxQAWRqAWj_jhyXfvsXkFMbqc-C1C3wor3d5JUWJqOqGWxb3c4vhgrWpHtjiW_AR8d8z2vpf0Df91ijaUcTuWb4C6gyrbNfNDbwBWXHYx",
      "cache-control": "no-cache",
      "Postman-Token": "bd522af8-a7a0-4f76-a52d-f27db838a8c7"
    }
  }
  
$.ajax(settings).done(function (response) {
    console.log(response);
});

// Variable that stores users input for location //
var location = 0;

});

/* Sergio's Coding Space (if you need to add a function to the submit button click, feel free to do it here --------------------------------------------------------------------*/

// Submit button on-click function:

$(".submit-order").on("click", function() {
  event.preventDefault();

  //hides .form-box on submit click
 // $(".form-box").hide();
  // $(".results-box").show();

  //displays .results-box on submit click
  // 
  console.log("order submitted");

});




