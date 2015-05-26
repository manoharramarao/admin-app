'use strict';

/**
 * @ngdoc service
 * @name betastoreAdminApp.catalog
 * @description
 * # catalog
 * Service in the betastoreAdminApp.
 */
angular.module('betastoreAdminApp')
  .service('catalogService', function ($resource) {
      var catalogs = [];
      var baseUrl = 'http://localhost:9000/';

      return {
          getCatalogs: $resource(baseUrl + 'data/catalog/get_catalogs.json', {}, {
              query:{
                  method: 'GET',
                  params: {},
                  headers: {'Content-Type': 'application/json; charset=UTF-8'},
                  isArray: true
              }
          }),
      }

  });
