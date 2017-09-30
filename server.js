// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var chrono = require('chrono-node');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


// link https://time-stamp-ramiel.glitch.me/timestamp?time=December%2015,%202015
app.get("/timestamp", function (request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });   
        let query = request.query.time
        let date = query.split("%20").join(" ");
        let res;
      function formatDate(date) {
      // https://stackoverflow.com/users/333255/marko
        let monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
        let day = date.getDate();
        let monthIndex = date.getMonth();
        let year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      }
      if (!isNaN(date) && parseInt(date) > 0){
        console.log(date);
        console.log(new Date(date*1000));
        res = { "unix": parseInt(date), "natural": formatDate(new Date(date*1000))}; 
      }
      else{
        let pasedDate = chrono.parseDate(date);
        if (pasedDate instanceof Date) {
        console.log(pasedDate.getTime());
        console.log(date);
        res = { "unix": pasedDate.getTime()/1000, "natural": date };
        }
        else {
          console.log("Not a Date");
          res = { "unix": null, "natural": null };
        }
      };
    response.end(JSON.stringify(res));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
