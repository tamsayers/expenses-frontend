// service for api requests - put in separate file?
expensesApp.controller('ExpensesFormController', ['$scope', 'apiRequest', function($scope, apiRequest) {
  $scope.postExpenses = function() {
    apiRequest.post('/expenses', [$scope.expense]);
  };
}]);
