
// service for api requests - put in separate file?
expensesApp.factory('apiRequest', ['$http', 'appConfig', function($http, appConfig) {
  return {
    post: function(resource, data) {
      var url = appConfig.backend + resource;
      return $http.post(url, data);
    }
  }
}]);
expensesApp.controller('ExpensesFormController', ['$scope', 'apiRequest', function($scope, apiRequest) {
  $scope.postExpenses = function() {
    apiRequest.post('/expenses', [$scope.expense]);
  };
}]);
