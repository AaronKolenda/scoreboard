angular.module("newGameController", [])
.controller("NewGameController", ["$scope", function($scope){

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
	var playersNamesScores = [{playerOne: $scope.playerOne, playerOneScore: $scope.playerOneScore},
						{playerTwo: $scope.playerTwo, playerTwoScore: $scope.playerTwoScore},
						{playerThree: $scope.playerThree, playerThreeScore: $scope.playerThreeScore},
						{playerFour: $scope.playerFour, playerFourScore: $scope.playerFourScore}];



	$scope.new_game_data = {game_name: $scope.gameName, players: playersNamesScores, winner: $scope.winner};

	console.log($scope.new_game_data);
  

  /*
  $http.post('/someUrl', $scope.new_game_data).
    success(function(data) {

    $scope.gameData = data;
    $scope.created = true;
    }).
    error(function(data, status, headers, config) {
      console.log("failed");
    });*/
}


}])