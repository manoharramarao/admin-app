'use strict';

/**
 * @ngdoc function
 * @name betastoreAdminApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the betastoreAdminApp
 */
angular.module('betastoreAdminApp').controller('ProductCtrl', function ($scope, productService, categoryService) {
    $scope.products = [];
    $scope.childCategories = [];

    // make a call to get list of products
    productService.getProducts.query(function(data){
        console.log("list of products is " + JSON.stringify(data));
        $scope.products = data;
    }, function(error){
        console.log("error occurred - " + JSON.stringify(error));
    });

    // make a call to get list of child categories - need to move this out of products page
    categoryService.getChildCategories.query(function(data){
        console.log("list of child categories are " + JSON.stringify(data));
        $scope.childCategories = data;
    }, function(error){
        console.log("Something is wrong " + JSON.stringify(error));
    })

  });
