angular.module("playerListController", [])
.controller("PlayerListController", ["$scope", "$http", function($scope, $http){

	$scope.playerListData; 

	$scope.listPlayers = function() {
	
		$http.get('http://scoreboardgames.herokuapp.com/api/v1/players?access_token=c3da9194b4fde0c768c93b6fdd8794af13261d2b6607d40f').
		  success(function(data) {
		    $scope.playerListData = data;
		    console.log($scope.playerListData);
		    console.log($scope.playerListData[0].player.email);    
		  }).
		  error(function(data, status, headers, config) {
		    console.log("failed");
	  	});

	}

}])