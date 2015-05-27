'use strict';

/**
 * @ngdoc service
 * @name betastoreAdminApp.categoryservice
 * @description
 * # categoryservice
 * Service in the betastoreAdminApp.
 */
angular.module('betastoreAdminApp')
  .service('categoryService', function ($resource) {
    var categories = [];
    var baseUrl = 'http://localhost:9000/';

    return {
        getCategories: $resource(baseUrl + 'data/catalog/get_categories.json', {}, {
            query:{
                method: 'GET',
                params: {},
                headers: {'Content-Type': 'application/json; charset=UTF-8'},
                isArray: true
            }
        }),
        getChildCategories: $resource(baseUrl + 'data/catalog/get_child_categories.json', {}, {
            query: {
                method: 'GET',
                params: {},
                headers: {'Content-Type': 'application/json; charset=UTF-8'},
                isArray: true
            }
        })
    }
  });
