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

    $scope.onDelete = function(category){
        for(var i=0; i<$scope.categories.length; i++){
            if($scope.categories[i].code == category.code){
                $scope.categories.splice(i, 1);
            }
        }
    }

    $scope.onEdit = function(category){
        $scope.editCategory = category;
    }

    $scope.editCategory = function(category){
        for(var i=0; i<$scope.categories.length; i++){
            if($scope.categories[i].code === category.code){
                $scope.categories[i].name = category.name;
                $scope.categories[i].display_name = category.display_name;
            }
        }
    }

  });
