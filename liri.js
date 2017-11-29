console.log('I am active');
// Grabs data from keys.js
var keys = require('./keys.js');
//node package to read and write file
var fs = require("fs");
//needed variables
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('spotify-api');

//---------------------------Twitter---------------------------------//
//client keys
var client = new Twitter({
  consumer_key: 'rm4AuU64bPjxwMtLr5x9R00rG',
  consumer_secret: 'W76kuoMfyquChFxRyTY68tp42gnxqpcH3ahiGExqZhySUdbuAP',
  access_token_key: '935277178018779136-65scyeZ8MUWNyFxjvmvZ7WMY8gzND3Q',
  access_token_secret: 'm6HWtSDpPyzFAFkJmrQzWOn5aTJ9L30B7CEzINWXap1nP',

});
//npm paramater, collect user name
var params = {
  screen_name: 'NandieNandie'
};
//nmp function for getTweets
function getTweets() {
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        for (var i = 0; i < tweets.length; i++) {
          var date = tweets[i].creates_at;
          console.log(tweets[i].text + "at" + date);

        }
        //pushes tweets into an emplty array
        // var myTweets = [];
        // //loop through array with for loop
        // for (var i = 0; i < myTweets.length; i++); {
        // //push myTweets into empty array
        // //myTweets.push ({
        // console.log(myTweets);
        // //})

      }
    });



//============Spotify====================================
//spotify client keys
var spotify = new Spotify({
  id: '9d8c4ec731dd49df9efffc1876380f57',
  secret: 'ad54f251d5674a8583a757dcac346efa'
});
//npm package search function
spotify.search({
  type: 'track',
  query: 'All the Small Things'
}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

  console.log(data);

});
};
