var gameApp = angular.module("gameApp", ["newGameController", "ui.router"])

gameApp.config([ "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("newGame", {
      views: {
        main: {
          templateUrl: "partials/testroute.html"
        },
      }
    })
    .state("newPlayer", {
      views: {
        main: {
          templateUrl: "partials/testroute2.html"
        },
      }
    })
    .state("listGame", {
      views: {
        main: {
          templateUrl: "partials/testroute3.html"
        },
      }
    })
    .state("listPlayer", {
      views: {
        main: {
          templateUrl: "partials/testroute4.html"
        },
      }
    })
    
    $urlRouterProvider.otherwise("index")

}])
