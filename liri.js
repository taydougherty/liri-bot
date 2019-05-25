// add all of the npm packages to the file
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");

// create variables using the inputs written in the terminal/bash
var dataCommand = process.argv[2];
var userCommand = process.argv[3];

// create a function to find the information about a band using the Bands in Town API for node
function bandSearch() {
    var URL = "https://rest.bandsintown.com/artists/" + userCommand + "/events?app_id=codingbootcamp";

    axios
  .get(URL)
  .then(function(response) {
    var artist = userCommand;
    var venue = response.data[0].venue.name;
    var venueLocation = response.data[0].venue.city;
    var date = response.data[0].datetime;
    var momentDate = moment(date);

    console.log(artist + " will play the " + venue + ".");
    console.log("The " + venue + " is located in " + venueLocation + ".");
    console.log("The date of the concert is " + momentDate.format("MM/DD/YYYY") + ".");
  })
  .catch(function(error) {
    console.log(error);
  });
};

// create a function to find the information about a song using the Spotify API for node
function songSearch() {
    spotify
  .search({ type: 'track', query: userCommand })
  .then(function(response) {
    var data = response.tracks.items[0];

    var songName = userCommand;
    var artist = data.artists[0].name;
    var link = data.external_urls.spotify;
    var album = data.album.name;

    console.log(songName + " is sung by " + artist + ".");
    console.log("The song name is " + songName + ".");
    console.log("This is the link to the song: " + link + ".");
    console.log(songName + " is on the " + album + " album.");
  })
  .catch(function(err) {
    console.log(err);
  });
};

// create a function to find the information about a movie using the OMDB API for node
function movieSearch() {
    var URL = "http://www.omdbapi.com/?t=" + userCommand + "&y=&plot=short&apikey=trilogy";

    axios
    .get(URL)
    .then(function(response) {
        var info = response.data;

        var movieTitle = info.Title;
        var movieYear = info.Year;
        var imdbRating = info.Ratings[0].Value;
        var rtRating = info.Ratings[1].Value;
        var country = info.Country;
        var language = info.Language;
        var plot = info.Plot;
        var actors = info.Actors;

        console.log("The movie is called " + movieTitle + ".");
        console.log(movieTitle + " came out in the year " + movieYear + ".");
        console.log("The IMDB rating of " + movieTitle + " is: " + imdbRating + ".");
        console.log("The Rotten Tomatoes rating of " + movieTitle + " is: " + rtRating + ".");
        console.log(movieTitle + " was produced in " + country + ".");
        console.log(movieTitle + " is in " + language + ".");
        console.log("The plot of " + movieTitle + " is: " + plot);
        console.log("The actors in " + movieTitle + " are: " + actors + ".");
    })
    .catch(function(error) {
      console.log(error);
    });
};

// read the data from an external file and perform the command
function readFile() {
    fs.readFile("./random.txt", "utf8", function(error, data) {
    if (error) {
        return console.log(error);
    }

    var dataArr = data.split(",");
    var command = dataArr[0];

    if(command === "spotify-this-song"){
        var song = dataArr[1];

        songSearch(song);
    } else if(command === "movie-this"){
        var movie = dataArr[1];

        movieSearch(movie);
    } else if(command === "concert-this"){
        var concert = dataArr[1];

        bandSearch(concert);
    }
    });
};

// execute functions
if(dataCommand === "concert-this"){
    bandSearch(userCommand);
} else if(dataCommand === "spotify-this-song"){
    songSearch(userCommand);
} else if(dataCommand === "movie-this"){
    if(userCommand){
        movieSearch(userCommand);
    } else {
        var given = "Mr. Nobody";
        movieSearch(given);
    };
} else if(dataCommand === "do-what-it-says"){
    readFile();
}

