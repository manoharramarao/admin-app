'use strict';

describe('Service: categoryservice', function () {

  // load the service's module
  beforeEach(module('betastoreAdminApp'));

  // instantiate service
  var categoryservice;
  beforeEach(inject(function (_categoryservice_) {
    categoryservice = _categoryservice_;
  }));

  it('should do something', function () {
    expect(!!categoryservice).toBe(true);
  });

});
