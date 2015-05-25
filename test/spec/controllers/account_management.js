'use strict';

describe('Controller: AccountManagementCtrl', function () {

  // load the controller's module
  beforeEach(module('betastoreAdminApp'));

  var AccountManagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountManagementCtrl = $controller('AccountManagementCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
