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
      .when('/account_management', {
        templateUrl: 'views/account_management.html',
        controller:'AccountManagementCtrl'
      })
      .when('/add_user', {
        templateUrl: 'templates/add_user.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
