angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  var isLogged = window.localStorage.getItem("isLogged") == 'true' && window.localStorage.getItem("isLogged") != null;

  $stateProvider
    
  .state('tabsController', {
    url: '/app',
    templateUrl: 'templates/tabsController.html',
    abstract:true,
    controller: 'AppCtrl'
  })

  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'mapsCtrl'
      }
    }
  })

  .state('tabsController.login', {
    url: '/login',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.misNotificaciones', {
    url: '/notificaciones',
    views: {
      'tab2': {
        templateUrl: 'templates/misNotificaciones.html',
        controller: 'misNotificacionesCtrl'
      }
    }
  })

  .state('tabsController.logout', {
    url: '/logout',
    views: {
      'tab3': {
        templateUrl: 'templates/logout.html',
        controller: 'logoutCtrl'
      }
    }
  })

if(!isLogged)
    $urlRouterProvider.otherwise('/app/login')
else
    $urlRouterProvider.otherwise('/app/home');
  

});