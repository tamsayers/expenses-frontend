angular.module('exp.development', []).constant('appConfig', {
  backend : 'http://localhost:9000'
});

angular.module('expensesApp', [
    'ngRoute', 
    'exp.development', 
    'ExpensesUtils',
    'AddExpenses',
    'HomePage']).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-expenses', {
    templateUrl: 'partials/expenses-form.html',
    controller: 'ExpensesFormController'
  }).otherwise({
    templateUrl : 'partials/home.html',
  });
}]).service('messages', function() {
  var messages = [];

  return {
    get: function() {
      return messages;
    },
    add: function(message) {
      messages.push(message);
    },
    reset: function() {
      messages = [];
    }
  };
});