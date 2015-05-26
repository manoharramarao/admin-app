'use strict';

/**
 * @ngdoc function
 * @name betastoreAdminApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the betastoreAdminApp
 */
angular.module('betastoreAdminApp')
  .controller('CategoryCtrl', function ($scope, categoryService) {

    $scope.categories = [];

    // make a call to get list of catalogs
    categoryService.getCategories.query(function(data){
        $scope.categories = data;
    }, function(error){
        console.log("error occurred - " + JSON.stringify(error));
    });



  });
