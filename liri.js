console.log('I am active');
// Grabs data from keys.js
var keys = require('./keys.js');
//node package to read and write file
var fs = require("fs");
//needed variables
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');


// SWITCH STATEMENT FOR RUNNING DIFFERENT APPS
// THIS WILL DIRECT WHICH FUNCTION TO RUN
// switch (action) {
//     case 'my-tweets':
//         twitter();
//         break;
//
//     case 'spotify-this-song':
//         spotify();
//         break;
//
//     case 'movie-this':
//         imdb();
//         break;
//
//     case 'do-what-it-says':
//         dwis();
//         break;
// }


//---------------------------Twitter------------------------------------------------------//
// var getTweets = function() {
//
//   //client keys
//   var client = new Twitter(keys);
//   //npm paramater, collect user name and latest 20 Tweets
//   var params = {
//     screen_name: 'issarae',
//     count: 20
//   };
//   //nmp function for getTweets
//   client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//       //empty array to store Tweets
//       var data = [];
//       //loop through tweets object
//       for (var i = 0; i < tweets.length; i++) {
//         var date = tweets[i].created_at;
//         //push 20 tweets with dates created into data array
//         data.push({
//           'created at: ': tweets[i].created_at,
//           'Tweets: ': tweets[i].text,
//         });
//         console.log(data);
//
//
//       }
//
//     } else {
//       console.log("No Tweets!");
//     }
//   });
//
// };
// //run function
// getTweets();

//========================================Spotify==========================================
// var getSpotify = function() {
// //spotify client keys
// var spotify = new Spotify({
//   id: '9d8c4ec731dd49df9efffc1876380f57',
//   secret: 'ad54f251d5674a8583a757dcac346efa'
// });
// //npm package search function
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
//
// console.log(data);
//
// });
// }
//
// getSpotify();
//
//
// //===================OMDB Movie Request======================================================
//
// var getMovie = function(){
// var movieName = process.argv[2];
//
// // Then run a request to the OMDB API with the movie specified
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
//
//
//
// request(queryUrl, function(error, response, body) {
//
//   // If the request is successful
//   if (!error && response.statusCode === 200) {
//
//     //parses response on console
//     console.log("Title: " + JSON.parse(body).Title);
//     console.log("Release Year: " + JSON.parse(body).Year);
//     console.log("Rating: " + JSON.parse(body).imdbRating);
//     console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[0].Value);
//     console.log("Country of Production: " + JSON.parse(body).Country);
//     console.log("Language: " + JSON.parse(body).Language);
//     console.log("Plot: " + JSON.parse(body).Plot);
//     console.log("Actors: " + JSON.parse(body).Actors);
//
//
//   }
// });
// }
//
// getMovie();
