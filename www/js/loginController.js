angular.module('app.controllers')
    .controller('loginCtrl', ['$scope', '$stateParams', '$location', '$ionicHistory',    
        function ($scope, $stateParams, $location, $ionicHistory) {

        	$scope.doLogin = function(){
        		window.localStorage.removeItem("isLogged");
        		window.localStorage.setItem("isLogged", "true");
        		$location.path("/app/home");
                $ionicHistory.clearHistory();
                $ionicHistory.nextViewOptions({
                    disableAnimate: false,
                    disableBack: true
                });
                window.location.reload(true);
        	};

        }
    ]);