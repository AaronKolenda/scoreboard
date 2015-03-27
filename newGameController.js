angular.module("newGameController", [])
.controller("NewGameController", ["$scope", "$http", function($scope, $http){

$scope.gameName;
$scope.playerOne;
$scope.playerOneScore;
$scope.playerTwo;
$scope.playerTwoScore;
$scope.playerThree;
$scope.playerThreeScore;
$scope.playerFour;
$scope.playerFourScore;
$scope.winner;
$scope.created = false;
$scope.gameData = {
          id: 1,
          name: "War",
          players: [
          {
          id: 1,
          email: "alex@example.com",
          score: 0,
          result: null
          },
          {
          id: 2,
          email: "bob@example.com",
          score: 0,
          result: null
          }
             ]
  }

$scope.addGame = function() {
	var playersNamesScores = [{email: $scope.playerOne, score: $scope.playerOneScore},
						{email: $scope.playerTwo, score: $scope.playerTwoScore},
						{email: $scope.playerThree, score: $scope.playerThreeScore},
						{email: $scope.playerFour, score: $scope.playerFourScore}];

	$scope.new_game_data = {game_name: $scope.gameName, players: playersNamesScores, winner: $scope.winner};

  var new_game_data = $scope.new_game_data;
  
  $http.post('http://scoreboardgames.herokuapp.com/api/v1/games?access_token=c3da9194b4fde0c768c93b6fdd8794af13261d2b6607d40f', new_game_data).
    success(function(data) {

    $scope.gameData = data;
    $scope.created = true;
    console.log($scope.gameData);
    }).
    error(function(data, status, headers, config) {
      console.log("failed");
    });
 console.log(new_game_data);
}
/*
$scope.playerListData; 
  
  $http.get('http://scoreboardgames.herokuapp.com/api/v1/players?access_token=c3da9194b4fde0c768c93b6fdd8794af13261d2b6607d40f').
    success(function(data) {
      $scope.playerListData = data;
    }).
    error(function(data, status, headers, config) {
      console.log("failed");
    });*/


}])