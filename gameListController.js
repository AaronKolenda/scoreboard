angular.module("gameListController", [])
.controller("GameListController", ["$scope", function($scope){

	//this controller is for getting a specific game and displaying it.

	$scope.gameListData; 
	/*
	$http.post('/someUrl', $scope.new_game_data).
	  success(function(data) {
	    $scope.gameListData = data;
	  }).
	  error(function(data, status, headers, config) {
	    console.log("failed");
  	});*/

	$scope.gameListData = [
	{
	game: {
	id: 2,
	name: "Battleship",
	created_at: "2015-03-26T21:16:36.394Z",
	updated_at: "2015-03-26T21:16:36.394Z"
	},
	players: [ ]
	},
	{
	game: {
	id: 1,
	name: "War",
	created_at: "2015-03-26T19:42:17.607Z",
	updated_at: "2015-03-26T19:42:17.607Z"
	},
	players: [
	{
	id: 1,
	email: "alex@example.com",
	created_at: "2015-03-26T19:42:47.390Z",
	updated_at: "2015-03-26T19:42:47.390Z"
	},
	{
	id: 2,
	email: "bob@example.com",
	created_at: "2015-03-26T19:42:53.367Z",
	updated_at: "2015-03-26T19:42:53.367Z"
	}
	]
	}
	]

	console.log($scope.gameListData)


}])