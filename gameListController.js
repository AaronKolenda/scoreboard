angular.module("gameListController", [])
.controller("GameListController", ["$scope", "$http", function($scope, $http){

	$scope.gameListData; 

	$scope.listGames = function() {
	
	$http.get('http://scoreboardgames.herokuapp.com/api/v1/games?access_token=c3da9194b4fde0c768c93b6fdd8794af13261d2b6607d40f').
	  success(function(data) {
	    $scope.gameListData = data;
	    console.log(data);
	  }).
	  error(function(data, status, headers, config) {
	    console.log("failed");
  	});

	}

}])