angular.module('app.controllers', [])
  
.controller('AppCtrl', ['$scope', '$stateParams', 
// codigo del controlador
function ($scope, $stateParams) {
	var isLogged = window.localStorage.getItem("isLogged") == 'true' && window.localStorage.getItem("isLogged") != null;
	if(!isLogged)
		$scope.item_tab = {label: "Login", link: "#/app/login", icon: "ion-log-in"};
	else
		$scope.item_tab = {label: "Home", link: "#/app/home", icon: "ion-home"};
}])





.controller('loginCtrl', ['$scope', '$stateParams', '$location', '$ionicHistory',
// codigo del controlador
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


}])

.controller('mapsCtrl', ['$scope', '$stateParams', 
// codigo del controlador
function ($scope, $stateParams) {


}])
   
.controller('misNotificacionesCtrl', ['$scope', '$stateParams', 
// codigo del controlador
function ($scope, $stateParams) {


}])
   
.controller('logoutCtrl', ['$scope', '$stateParams', '$location', '$ionicHistory',
// codigo del controlador
function ($scope, $stateParams, $location, $ionicHistory) {
	// $scope.doLogout = function(){
	window.localStorage.removeItem("isLogged");
	window.localStorage.setItem("isLogged", "false");
	$location.path("/app/login");
    $ionicHistory.clearHistory();
    $ionicHistory.nextViewOptions({
        disableAnimate: false,
        disableBack: true
    });
    window.location.reload(true);
	// };
}])