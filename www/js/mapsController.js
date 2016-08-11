angular.module('app.controllers')

	.controller('mapsCtrl', ['$scope', '$stateParams', '$cordovaGeolocation',
		function ($scope, $stateParams, $cordovaGeolocation) {

			$scope.stateMap = "Loading";
			var options = {timeout: 15000, enableHighAccuracy: true};

			$cordovaGeolocation.getCurrentPosition(options)
				.then(function(position){
					$scope.stateMap = "Ok";
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
					$scope.stateMap = "Error";
					$scope.mensaje = "ERROR!! --> "+JSON.stringify(error);

					alert("Could not get location");
					var latLng = new google.maps.LatLng(-12.11665, -77.024201);
					var mapOptions = {
						center: latLng,
						zoom: 15,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
					$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
				});

		}
	]);