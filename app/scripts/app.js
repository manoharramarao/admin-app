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
      .when('/account', {
        templateUrl: 'views/account_management.html',
        controller:'AccountCtrl'
      })
      .when('/catalog', {
        templateUrl: 'views/catalog_management.html',
        controller: 'CatalogCtrl'
      })
      .when('/:catalog_code/category', {
        templateUrl: 'views/category_management.html',
        controller:'CategoryCtrl'
      })
      .when('/product', {
        templateUrl: 'views/product_management.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
