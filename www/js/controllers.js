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

	$scope.mensaje = "Cargando el mapa...";

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

			// Cuando carga el mapa
		    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
		    	var marker = new google.maps.Marker({
		    		map: $scope.map,
		    		animation: google.maps.Animation.DROP,
		    		position: latLng
		    	});


		    	var infoWindow = new google.maps.InfoWindow({
		    		content: "Estás aquí!"
		    	});

		    	google.maps.event.addListener(marker, 'click', function () {
		    		infoWindow.open($scope.map, marker);
		    	});
		    });

		}, function(error){
			console.log("Could not get location");
			$scope.mensaje = "ERROR!!";
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