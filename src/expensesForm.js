var app = angular.module('expensesApp', []);
// service for api requests - put in separate file?
app.factory('api', ['$http', function($http) {
  return {
    post: function(serviceName, data) {
      console.log('posting to ' + serviceName + ', data: ' + JSON.stringify(data));
      //return $http.post('https://api.github.com/users/jasonmore');
    }
  }
}]);
app.controller('ExpensesFormController', ['$scope', 'api', function($scope, api) {
  $scope.postExpenses = function() {
    console.log('submitted');
    console.log('api variable: ' + api);
    api.post('/expenses', $scope.expense);
  };
}]);
