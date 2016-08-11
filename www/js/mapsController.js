angular.module('app.controllers')

	.controller('mapsCtrl', ['$scope', '$stateParams', '$cordovaGeolocation',
		function ($scope, $stateParams, $cordovaGeolocation) {

			$scope.detalle = "inicio";

			$scope.closeCard = function(){
				var descDiv = document.getElementById("descripcion");
				descDiv.style.display = 'none';
				$scope.detalle = "";
			};

			$scope.stateMap = "Loading";
			var options = {timeout: 15000, enableHighAccuracy: true};

			$cordovaGeolocation.getCurrentPosition(options)
				.then(function(position){
					$scope.stateMap = "Ok";

					var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
					var mapOptions = {
						center: latLng,
						zoom: 14,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
					$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

					// Graficar Ruta
					var rutaFibra = [];
					rutaFibra.push( new google.maps.LatLng(-12.11658,-77.02427) ); // YACHAY
					rutaFibra.push( new google.maps.LatLng(-12.11647, -77.02183) ); // Manuel Irribarren
					rutaFibra.push( new google.maps.LatLng(-12.11215, -77.02241) ); // Domingo Elias
					rutaFibra.push( new google.maps.LatLng(-12.11188, -77.01847) ); // República de Panamá
					rutaFibra.push( new google.maps.LatLng(-12.10208, -77.01862) ); // Aramburú
					rutaFibra.push( new google.maps.LatLng(-12.1015, -77.01864) ); // Gg
					rutaFibra.push( new google.maps.LatLng(-12.09743, -77.02016) ); // Canaval y Moreyra
					rutaFibra.push( new google.maps.LatLng(-12.0968, -77.02474) ); // Paseo de la República
					rutaFibra.push( new google.maps.LatLng(-12.09482, -77.02373) ); // Miguel G Seminario
					rutaFibra.push( new google.maps.LatLng(-12.09385, -77.02572) ); // Andrés Reyes
					rutaFibra.push( new google.maps.LatLng(-12.09461, -77.03104) ); // Paseo Parodi
					rutaFibra.push( new google.maps.LatLng(-12.0953, -77.03145) ); // Manuel Bañon
					rutaFibra.push( new google.maps.LatLng(-12.0941, -77.03495) ); // Jorge Basadre
					rutaFibra.push( new google.maps.LatLng(-12.09469, -77.03667) ); // Los Pinos
					rutaFibra.push( new google.maps.LatLng(-12.09612, -77.03693) ); // Juan de Arona
					rutaFibra.push( new google.maps.LatLng(-12.09644, -77.03577) ); // Camino Real
					rutaFibra.push( new google.maps.LatLng(-12.09897, -77.03711) ); // Choquehuanca
					rutaFibra.push( new google.maps.LatLng(-12.09989, -77.03776) ); // Lizardo Alzamora
					rutaFibra.push( new google.maps.LatLng(-12.10736, -77.03956) ); // Emilio Cavencia
					rutaFibra.push( new google.maps.LatLng(-12.10965, -77.03752) ); // Lord Nelson
					rutaFibra.push( new google.maps.LatLng(-12.113, -77.04114) ); // Cruce
					rutaFibra.push( new google.maps.LatLng(-12.11408, -77.0399) ); // Santa Cruz
					rutaFibra.push( new google.maps.LatLng(-12.11397, -77.03694) ); // Jorge Chavez
					rutaFibra.push( new google.maps.LatLng(-12.1179, -77.03696) ); // Dos de Mayo
					rutaFibra.push( new google.maps.LatLng(-12.11796, -77.02913) ); // Arequipa
					rutaFibra.push( new google.maps.LatLng(-12.11695, -77.02806) ); // Petit Thouars
					rutaFibra.push( new google.maps.LatLng(-12.11662, -77.02628) ); // Via Expresa
					// Ruta hacia GYM
					rutaFibra.push( new google.maps.LatLng(-12.11658,-77.02427) ); // YACHAY
					rutaFibra.push( new google.maps.LatLng(-12.11654,-77.02285) ); // Dante
					rutaFibra.push( new google.maps.LatLng(-12.11218,-77.02342) ); // Domingo Elías
					rutaFibra.push( new google.maps.LatLng(-12.11231,-77.02531) ); // Gral Recavarren
					rutaFibra.push( new google.maps.LatLng(-12.11175,-77.02557) ); // GyM
					var polylineOptions = {
						path: rutaFibra,
						strokeColor: "#ff0000"
					};
					var polyline = new google.maps.Polyline( polylineOptions );
					polyline.setMap($scope.map);


					// Marcador de prueba ==============================================
					var testMarker = new google.maps.Marker({
			    		map: $scope.map,
			    		position: new google.maps.LatLng(-12.11175,-77.02557),
			    		title: "Test"
			    	});
			    	google.maps.event.addListener(testMarker, 'click', function () {
			    		console.log("-12.11175,-77.02557");
			    		$scope.detalle = "gg wp";
			    		var descDiv = document.getElementById("descripcion");
						descDiv.style.display = descDiv.style.display === 'none' ? 'block' : 'none';
			    	});
			    	// =================================================================


					// Cuando carga el mapa
				    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
				    	var marker = new google.maps.Marker({
				    		map: $scope.map,
				    		animation: google.maps.Animation.DROP,
				    		position: latLng,
				    		title: "Tu ubicación"
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