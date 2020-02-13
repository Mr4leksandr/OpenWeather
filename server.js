const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const port = "3000";
app.set('view engine', "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post('/', function(req, res){
    let city = req.body.city;

    if(city === "Tal"){
            request(`https://api.openweathermap.org/data/2.5/weather?id=862995&units=metric&appid=46095c8deba81dbe99986ce77444085b`, function(error, response, body){
            let data = JSON.parse(response.body);    
            temp = data.main.temp;
            disc = data.weather[0].description;
            res.write("<h1>Tallinn</h1>")
            res.write("<h2>Temperatuur: "+temp+"</h2>")
            res.write("Kirjeldus: "+disc)
            res.send();
        });
    }
    if (city === "Tar"){
            request(`https://api.openweathermap.org/data/2.5/weather?id=588335&units=metric&appid=46095c8deba81dbe99986ce77444085b`, function(error, response, body){
            let data = JSON.parse(response.body); 
            temp = data.main.temp;
            disc = data.weather[0].description;
            res.write("<h1>Tartu</h1>")
            res.write("<h2>Temperatuur: "+temp+"</h2>")
            res.write("Kirjeldus: "+disc)
            res.send();
        });
    }
    if (city === "Par"){
            request(`https://api.openweathermap.org/data/2.5/weather?id=589576&units=metric&appid=46095c8deba81dbe99986ce77444085b`, function(error, response, body){
            let data = JSON.parse(response.body); 
            temp = data.main.temp;
            disc = data.weather[0].description;
            res.write("<h1>Parnu</h1>")
            res.write("<h2>Temperatuur: "+temp+"</h2>")
            res.write("Kirjeldus: "+disc)
            res.send();
        });
    }
});

app.listen(port, function(){
    console.log("Server is running on port "+port)
});