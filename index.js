var gameApp = angular.module("gameApp", ["newGameController", "gameListController", "ui.router"])


gameApp.config([ "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("newGame", {
      views: {
        main: {
          templateUrl: "partials/newgame.html"
        }
      }
    })
    .state("newPlayer", {
      views: {
         main: {
          templateUrl: "partials/newplayer.html"
        }
      }
    })
    .state("listGame", {
      views: {
         main: {
          templateUrl: "partials/listgame.html"
        }
      }
    })
    .state("listPlayer", {
      views: {
         main: {
          templateUrl: "partials/listplayer.html"
        }
      }
    })
    
    $urlRouterProvider.otherwise("index")

}])

