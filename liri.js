console.log('I am active');
// Grabs data from keys.js
var keys = require('./keys.js');
//node package to read and write file
var fs = require("fs");
//needed variables
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var argOne = process.argv[2];
var argTwo = process.argv[3];


//---------------------------Twitter------------------------------------------------------//
var getTweets = function() {

  //client keys
  var client = new Twitter(keys);
  //npm paramater, collect user name and latest 20 Tweets
  var params = {
    screen_name: 'issarae',
    count: 20
  };
  //nmp function for getTweets
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      //empty array to store Tweets
      var data = [];
      //loop through tweets object
      for (var i = 0; i < tweets.length; i++) {
        var date = tweets[i].created_at;
        //push 20 tweets with dates created into data array
        data.push({
          'created at: ': tweets[i].created_at,
          'Tweets: ': tweets[i].text,
        });
        console.log(data);


      }

    } else {
      console.log("No Tweets!");
    }
  });

};
//run function
getTweets();
// //
// // //========================================Spotify==========================================
// // var getSpotify = function(){
// // //spotify client keys
// // var spotify = new Spotify({
// //   id: '9d8c4ec731dd49df9efffc1876380f57',
// //   secret: 'ad54f251d5674a8583a757dcac346efa'
// // });
// //
// //
// // //if user doesn't input a song, search "what's my age again" in the search
// // if (argTwo === undefined) {
// //    argTwo = 'What\'s my age again';
// //  };
// //
// // //spotify npm search
// // spotify.search({ type: 'track', query: argTwo }, function(err, data) {
// //   if (err) {
// //     return console.log('Error occurred: ' + err);
// //   }
// //
// // console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
// // console.log("Song Name: " + data.tracks.items[0].name);
// // console.log("Spotify Preview Link: " + data.tracks.items[0].external_urls.spotify);
// // console.log("Album: " + data.tracks.items[0].album.name);
// //
// // //append to log txt file
// //  fs.appendFile('log.txt', "Artist: " + data.tracks.items[0].artists[0].name + "\n" + "Song Name: " + data.tracks.items[0].name + "\n" + "Spotify Preview Link: " + data.tracks.items[0].external_urls.spotify + "\n" + "Album: " +
// //  data.tracks.items[0].album.name + "\n");
// //
// // });
// // }
// //
// // getSpotify();
// //
//
// // //===================OMDB Movie Request======================================================
// //
// var getMovie = function() {
//
//   // Then run a request to the OMDB API with the movie specified
//   var queryUrl = "http://www.omdbapi.com/?t=" + argTwo + "&y=&plot=short&apikey=40e9cece";
//
//
//
//   request(queryUrl, function(error, response, body) {
//
//     // If the request is successful
//     if (!error && response.statusCode === 200) {
//
//       //parses response on console
//       var movie = JSON.parse(body);
//       console.log("Title: " + JSON.parse(body).Title);
//       console.log("Release Year: " + JSON.parse(body).Year);
//       console.log("Rating: " + JSON.parse(body).imdbRating);
//       console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[0].Value);
//       console.log("Country of Production: " + JSON.parse(body).Country);
//       console.log("Language: " + JSON.parse(body).Language);
//       console.log("Plot: " + JSON.parse(body).Plot);
//       console.log("Actors: " + JSON.parse(body).Actors);
//       fs.appendFile('log.txt', "Title: " + movie.Title + "\n" + "Year: " + movie.Year + "\n" + "IMDB Rating: " + movie.imdbRating + "\n" + "Country: " + movie.Country + "\n" + "Language: " + movie.Language + "\n" +
//         "Plot: " + movie.Plot + "\n" + "Actors: " + movie.Actors + "\n" + "Rotten Tomatoes Rating: " + movie.Ratings[0].Value);
//       //
//       //
//     }
//   });
// }
//
// getMovie();

var doWhatItSays = function() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    console.log(data);
    var dataArr = data.split(',')

    if (dataArr.length == 2) {
      pick(dataArr[0], dataArr[1]);
    } else if (dataArr.length == 1) {
      pick(dataArr[0]);
    }
  });
}



//switch statement to run different apps
var choice = function(action){
switch (argOne) {
    case 'my-tweets':
        getTweets();
        break;

    case 'spotify-this-song':
        getSpotify();
        break;

    case 'movie-this':
        getMovie();
        break;

    case 'do-what-it-says':
        doWhatItSays();
        break;
 }
 }
 choice();
