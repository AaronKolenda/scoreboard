angular.module("newPlayerController", [])
.controller("NewPlayerController", ["$scope", "$http", function($scope, $http){

	$scope.new_player_data;
	$scope.playerName;
	$scope.playerEmail;
	$scope.playerData;
	$scope.created = false;

	$scope.addPlayer = function() {

		$scope.new_player_data = {email: $scope.playerEmail};
		var email = $scope.new_player_data;
		
		$http.post('http://scoreboardgames.herokuapp.com/api/v1/players?access_token=c3da9194b4fde0c768c93b6fdd8794af13261d2b6607d40f', email).
		  success(function(data) {
			$scope.playerData = data;
			$scope.created = true;
			console.log($scope.playerData);
		  }).
		  error(function(data, status, headers, config) {
		    console.log("failed");
		  });

}


}])