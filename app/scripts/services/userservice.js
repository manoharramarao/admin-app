'use strict';

/**
 * @ngdoc service
 * @name betastoreAdminApp.userService
 * @description
 * # userService
 * Service in the betastoreAdminApp.
 */
angular.module('betastoreAdminApp')
  .service('userService', ['$resource', '$location', function ($resource, $location) {

      var users = [];
      var baseUrl = 'http://localhost:9000/';

      return {

          getUsers: $resource(baseUrl + 'data/user/get_users.json', {}, {
              query:{
                  method: 'GET',
                  params: {},
                  headers: {'Content-Type': 'application/json; charset=UTF-8'},
                  isArray: true
              }
          }),

      }

  }]);
