'use strict';

/**
 * @ngdoc function
 * @name betastoreAdminApp.controller:GlobalCtrl
 * @description
 * # GlobalCtrl
 * Controller of the betastoreAdminApp
 */
angular.module('betastoreAdminApp')
  .controller('GlobalCtrl', function ($rootScope, $timeout, $scope) {

    // toggle error message alert box
    $rootScope.toggleAlertBox = function(){
      if($rootScope.showAlert){
          $rootScope.showAlert = !$rootScope.showAlert;
      }
    }


    /*$rootScope.showAlert = function(heading, message, alertClasses){
        $rootScope.alert_heading = heading;
        $rootScope.alert_message = message;
        $rootScope.alertClass = alertClasses;
        $rootScope.showAlert = true;
        $timeout($rootScope.toggleAlertBox, 4000);
    }*/

  });
