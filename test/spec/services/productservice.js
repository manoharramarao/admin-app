'use strict';

describe('Service: productService', function () {

  // load the service's module
  beforeEach(module('betastoreAdminApp'));

  // instantiate service
  var productservice;
  beforeEach(inject(function (_productservice_) {
    productservice = _productservice_;
  }));

  it('should do something', function () {
    expect(!!productservice).toBe(true);
  });

});
