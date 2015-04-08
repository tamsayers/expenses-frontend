describe('expenses controller function', function() {
  beforeEach(module('AddExpenses'));

  var $scope, addExpensesService, apiRequest;

  beforeEach(inject(function($rootScope, $controller, _addExpensesService_) {
    $scope = $rootScope.$new();
    addExpensesService = _addExpensesService_;
    
    apiRequest = {
      post : function() {
      }
    };
    $controller('ExpensesFormController', {
      $scope: $scope,
      apiRequest: apiRequest, 
      addExpensesService: addExpensesService
    });
  }));

  describe('form submit', function() {
    beforeEach(function() {
      $scope.expenses = [{
        description : "desc1"
      }];

      spyOn(apiRequest, 'post');
    });

    it('should use api to post expenses data', function() {
      var expectedPostData = { 
          data: $scope.expenses, 
          success: addExpensesService.success 
      };
      $scope.postExpenses();
      expect(apiRequest.post).toHaveBeenCalledWith('/expenses', expectedPostData);
    });
  });

  describe('add expense', function() {
    it('should add another expense object to the scope', function() {
      expect($scope.expenses.length).toBe(1);
      $scope.addExpense();
      $scope.addExpense();
      expect($scope.expenses.length).toBe(3);
    });
  });
});