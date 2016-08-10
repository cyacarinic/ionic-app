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

.controller('mapsCtrl', ['$scope', '$stateParams', '$cordovaGeolocation',
// codigo del controlador
function ($scope, $stateParams, $cordovaGeolocation) {

	var options = {timeout: 10000, enableHighAccuracy: true};

	$cordovaGeolocation.getCurrentPosition(options)
		.then(function(position){
			var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

			var mapOptions = {
				center: latLng,
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
		}, function(error){
			console.log("Could not get location");
		});


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