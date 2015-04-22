// service for api requests - put in separate file?
angular.module('AddExpenses', ['expensesApp']).controller('ExpensesFormController', [
    '$scope',
    'apiRequest',
    'addExpensesService', 
    function($scope, apiRequest, addExpensesService) {
  $scope.postExpenses = function() {
    apiRequest.post('/expenses', { data: $scope.expenses, success: addExpensesService.success });
  };
  $scope.expenses = [ {} ];

  $scope.addExpense = function() {
    $scope.expenses.push({});
  };
}])
.service('addExpensesService', ['$location', 'messages', function($location, messages) {
  this.success = function() {
    messages.reset();
    messages.add('Expenses successfully added.');
    $location.path('/');
  }
}]);
