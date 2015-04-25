describe('expenses controller function', function() {
  beforeEach(module('HomePage'));
  
  var $scope, messages; 
  
  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    messages = ['message1', 'message2'];
    
    $controller('HomePageController', {
      $scope: $scope,
      messages: {
        get: function() {
          return messages;
        }
      }
    });
  }));

  it('should add the messages to the scope', function() {
    expect($scope.messages).toBe(messages);
  });
});