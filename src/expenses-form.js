// service for api requests - put in separate file?
angular.module('AddExpenses', []).controller('ExpensesFormController', [
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
.service('addExpensesService', ['$location', function($location) {
  this.success = function() {
    $location.path('/');
  }
}]);
