angular.module("gameListController", [])
.controller("GameListController", ["$scope", "$http", function($scope, $http){

	$scope.gameListData; 
	
	$http.get('http://scoreboardgames.herokuapp.com/api/v1/games?access_token=c3da9194b4fde0c768c93b6fdd8794af13261d2b6607d40f').
	  success(function(data) {
	    $scope.gameListData = data;
	    console.log(data);
	  }).
	  error(function(data, status, headers, config) {
	    console.log("failed");
  	});



	/*$scope.gameListData = [
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

	console.log($scope.gameListData)*/


}])