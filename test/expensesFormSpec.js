describe('expenses controller function', function() {

  describe('form submit', function() {
    var $scope, apiRequest;

    beforeEach(module('expensesApp'));

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $scope.expense = {
          description: "desc"
      }
      apiRequest = {
          post: function() {}
      };
      spyOn(apiRequest, 'post');
      $controller('ExpensesFormController', {$scope: $scope, apiRequest: apiRequest});
    }));

    it('should use api to post expenses data', function() {
      $scope.postExpenses();
      expect(apiRequest.post).toHaveBeenCalledWith('/expenses', $scope.expense);
    });
  });
});