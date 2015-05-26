'use strict';

/**
 * @ngdoc function
 * @name betastoreAdminApp.controller:CatalogManagementCtrl
 * @description
 * # CatalogManagementCtrl
 * Controller of the betastoreAdminApp
 */
angular.module('betastoreAdminApp')
  .controller('CatalogCtrl', function ($scope, $location, catalogService) {

    $scope.catalogs = [];

    // make a call to get list of catalogs
    catalogService.getCatalogs.query(function(data){
      $scope.catalogs = data;
    }, function(error){
      console.log("error occurred - " + JSON.stringify(error));
    });

    $scope.onClick = function(catalog){
        $location.path('/' + catalog.code + '/category');
    }
  });
