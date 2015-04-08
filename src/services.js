angular.module('ExpensesUtils', ['exp.development']).factory('apiRequest', [
    '$http',
    'appConfig',
    function($http, appConfig) {
  return {
    post: function(resource, data) {
      var url = appConfig.backend + resource;
      return $http.post(url, data);
    }
  }
}]);
