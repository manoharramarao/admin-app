'use strict';

/**
 * @ngdoc function
 * @name betastoreAdminApp.controller:AccountManagementCtrl
 * @description
 * # AccountManagementCtrl
 * Controller of the betastoreAdminApp
 */
angular.module('betastoreAdminApp')
  .controller('AccountCtrl', function ($rootScope, $timeout, $scope, userService) {

    $scope.users = [];
    $scope.usersToEdit = [];

    // make a call to get list of users
    userService.getUsers.query(function(data){
        $scope.users = data;
    }, function(error){
        console.log("error occurred - " + JSON.stringify(error));
    })

    $scope.addUser = function(newUser){
        // call function in userService to make web service call
        var isExistingUser = false;

        for(var i=0; i<$scope.users.length; i++){
            if($scope.users[i].ID === newUser.ID){
              isExistingUser = true;
              $scope.users[i] = newUser;
              showUpdateUserSuccessMessage();
              break;
            }
        }
        if(!isExistingUser){ // create user

            /* Just for demo purpose starts */
            newUser.ID = $scope.users.length + 1;
            newUser.registration_key = "bf745f6b-cd8d-4a28-8ae0-040501dff62f";
            newUser.registration_password_key = "bf745f6b-cd8d-4a28-8ae0-040501dff62f";
            newUser.registration_identifier = "bf745f6b-cd8d-4a28-8ae0-040501dff62f";
            newUser.code = "bf745f6b-cd8d-4a28-8ae0-040501dff62f";
            /* Just for demo purpose ends */

            $scope.users.push(newUser);
            showAddUserSuccessMessage();
        }
        // clear out newUser variable
        /*$scope.newUser = {};*/
        /*$scope.usersToEdit = [];*/
    }

    $scope.edituser = function(user){
        for(var i=0; i<$scope.users.length; i++){
            if($scope.users[i].ID === newUser.ID){
              $scope.users[i] = user;
              showUpdateUserSuccessMessage();
              break;
            }
        }
    }

    $scope.onSelectUser = function(user){

        var isExistingUser = false;
        var k;
        for(var i=0; i<$scope.usersToEdit.length; i++){
            if(user.ID === $scope.usersToEdit[i].ID){
                isExistingUser = true;
                k = i;
                break;
            }
        }
        if(!isExistingUser && user.isSelected){
            $scope.usersToEdit.push(user);
        }else{
            $scope.usersToEdit.splice(k,1);
        }
        console.log("complete list of selected users is " + JSON.stringify($scope.usersToEdit));
    }

    $scope.assignValueToNewUser = function(){
        console.log("just before assigning ");
        $scope.newUser=$scope.usersToEdit[0];
    }

    /*$scope.onDelete = function(){
      for(var i=0; i < $scope.usersToEdit.length; i++){
        var selectedIndex = parseInt($scope.usersToEdit[i].ID);
        for(var k=selectedIndex;k > 0; k--){
          if(k < $scope.users.length){
            if($scope.users[k].ID === $scope.usersToEdit[i].ID){
              $scope.users.splice(k, 1);
              break;
            }
          }
        }
      }
      $scope.usersToEdit = [];
    }*/

    /* TODO @manohar - change this logic. Hold users as map and not as array.*/
    $scope.onDelete = function(){
      for(var i=0; i<$scope.usersToEdit.length; i++){
        for (var k=0; k<$scope.users.length; k++){
          if($scope.usersToEdit[i].ID === $scope.users[k].ID){
            $scope.users.splice(k, 1);
          }
        }
      }
      $scope.usersToEdit = [];
    }

    var showUpdateUserSuccessMessage = function(){
        // show success message
        $rootScope.alert_heading = "Success";
        $rootScope.alert_message = "User successfully updated";
        $rootScope.showAlert = true;
        $rootScope.alertClass = 'alert alert-dismissable alert-success';
        $timeout($rootScope.toggleAlertBox, 4000);
    }

    var showAddUserSuccessMessage = function(){
        // show success message
        $rootScope.alert_heading = "User registration success";
        $rootScope.alert_message = "New user added successfully";
        $rootScope.showAlert = true;
        $rootScope.alertClass = 'alert alert-dismissable alert-success';
        $timeout($rootScope.toggleAlertBox, 4000);
        $('#addUser').modal({
            show: 'false'
        });
    }

  });
