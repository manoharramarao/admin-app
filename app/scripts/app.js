'use strict';

/**
 * @ngdoc overview
 * @name betastoreAdminApp
 * @description
 * # betastoreAdminApp
 *
 * Main module of the application.
 */
angular
  .module('betastoreAdminApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
