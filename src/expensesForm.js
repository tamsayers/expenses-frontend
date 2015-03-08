angular.module('exp.development', []).constant('appConfig', {
  backend: 'http://localhost:9000'
});

var app = angular.module('expensesApp', ['exp.development']);
// service for api requests - put in separate file?
app.factory('apiRequest', ['$http', 'appConfig', function($http, appConfig) {
  return {
    post: function(resource, data) {
      alert(appConfig);
      var url = appConfig.backend + resource;
      return $http.post(url, data);
    }
  }
}]);
app.controller('ExpensesFormController', ['$scope', 'apiRequest', function($scope, apiRequest) {
  $scope.postExpenses = function() {
    apiRequest.post('/expenses', $scope.expense);
  };
}]);
