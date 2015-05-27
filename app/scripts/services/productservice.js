'use strict';

/**
 * @ngdoc service
 * @name betastoreAdminApp.productservice
 * @description
 * # productservice
 * Service in the betastoreAdminApp.
 */
angular.module('betastoreAdminApp')
  .service('productService', function ($resource) {

    var products = [];
    var baseUrl = 'http://localhost:9000/';

    return {
        getProducts: $resource(baseUrl + 'data/catalog/get_products.json', {}, {
            query:{
                method: 'GET',
                params: {},
                headers: {'Content-Type': 'application/json; charset=UTF-8'},
                isArray: true
            }
        }),
    }
  });
