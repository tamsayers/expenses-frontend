angular.module('HomePage', ['expensesApp']).controller('HomePageController', [
    '$scope',
    'messages', function($scope, messages) {
  $scope.messages = messages.get();
}]);