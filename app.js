var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

/*app.get("/player/:id", function(req, res){		//get a specific player
	res.json({
		user_id: 1
		email: "jack@games.com",
		user_name: "Jack", 
	})
})

app.get("/players", function(req, res){			//get list of all players
	res.json({
		user_id: 1,
		email: "jack@games.com",
		user_name: "Jack"
	},
	{
		user_id: 2,
		email: "ralph@games.com",
		user_name: "Ralph" 
	},
	{
		user_id: 3
		email: "jimmydean@games.com",
		user_name: "Jimmy Dean" 
	})
})

app.post("/players", function(req, res){		//create a new player
	
})

app.post("/games", function(req, res){			//create a new game
	
})

app.get("/games", function(req, res){			//get list of all games
	res.json({
		game_id: 1,
		user_ids: [1, 2, 3],
		name: "Settlers of Catan"
	},
	{
		game_id: 2,
		user_ids: [1, 2],
		name: "Settlers of Catan"
	})
})

app.get("/games/:id", function(req, res){		//get specific game
	res.json({
		user_ids: [1, 2, 3],
		name: "Settlers of Catan"
	})
})







module.exports = app;


get player stats		/player/id     get	returns a specific player

list of users  			/players	    get         

create a new player		 /players       post         data: {email: email, user_name: name, user_id: id}
create new game 		 /games        post        data: list of user ids, name of game

list of games 			/games        get         returns every game id {game_id: 
get a specific game		/games:id    get	returns {user_id: {score: score, winless: win}}
update game			/games:id    patch      data: object {userid: {score: win}} */
