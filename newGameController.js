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

$scope.addGame = function() {
	var playersNamesScores = [{playerOne: $scope.playerOne, playerOneScore: $scope.playerOneScore},
						{playerTwo: $scope.playerTwo, playerTwoScore: $scope.playerTwoScore},
						{playerThree: $scope.playerThree, playerThreeScore: $scope.playerThreeScore},
						{playerFour: $scope.playerFour, playerFourScore: $scope.playerFourScore}];



	$scope.new_game_data = {game_name: $scope.gameName, players: playersNamesScores, winner: $scope.winner};

	console.log($scope.new_game_data);
}


  /*
$http.post('/someUrl', $scope.new_game_data).
  success(function(data) {
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    console.log("failed");
  });*/



}])