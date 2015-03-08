describe('expenses controller function', function() {

  describe('form submit', function() {
    var $scope, api;

    beforeEach(module('expensesApp'));

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $scope.expense = {
          description: "desc"
      }
      api = {
          post: function() {}
      };
      spyOn(api, 'post');
      $controller('ExpensesFormController', {$scope: $scope, api: api});
    }));

    it('should use api to post expenses data', function() {
      $scope.postExpenses();
      expect(api.post).toHaveBeenCalledWith('/expenses', $scope.expense);
    });
  });
});