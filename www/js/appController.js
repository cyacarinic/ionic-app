angular.module('app.controllers', [])  
	.controller('AppCtrl', ['$scope', '$stateParams', 
		function ($scope, $stateParams) {
			var isLogged = window.localStorage.getItem("isLogged") == 'true' && window.localStorage.getItem("isLogged") != null;
			if(!isLogged)
				$scope.item_tab = {label: "Login", link: "#/app/login", icon: "ion-log-in"};
			else
				$scope.item_tab = {label: "Home", link: "#/app/home", icon: "ion-home"};
		}
	]);