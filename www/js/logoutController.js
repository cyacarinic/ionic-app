angular.module('app.controllers')

    .controller('logoutCtrl', ['$scope', '$stateParams', '$location', '$ionicHistory',
        function ($scope, $stateParams, $location, $ionicHistory) {

        	window.localStorage.removeItem("isLogged");
        	window.localStorage.setItem("isLogged", "false");
        	$location.path("/app/login");
            $ionicHistory.clearHistory();
            $ionicHistory.nextViewOptions({
                disableAnimate: false,
                disableBack: true
            });
            window.location.reload(true);

        }
    ]);