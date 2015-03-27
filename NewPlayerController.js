angular.module("newPlayerController", [])
.controller("NewPlayerController", ["$scope", function($scope){

	$scope.new_player_data;
	$scope.playerName;
	$scope.playerEmail;
	$scope.playerData;
	$scope.created = false;

	$scope.addPlayer = function() {

		$scope.new_player_data = {player_name: $scope.playerName, player_email: $scope.playerEmail}

		/*
		$http.post('/someUrl', $scope.new_player_data).
		  success(function(data) {
			$scope.playerData = data;
			$scope.created = false;
		  }).
		  error(function(data, status, headers, config) {
		    console.log("failed");
		  });*/

}


}])