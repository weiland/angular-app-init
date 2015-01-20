// Old approach (plunker example)
var app = angular.module('plunker-app', []);
app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

// Newer Approach: directives, isolated scope and controllerAs
angular.module('test-app', []);

angular.module('test-app')
  .directive('myCustomer', function() {
    return {
      restrict: 'E',
      scope: {},
      controller: function() {
        var vm = this;
        vm.name = 'Pascal';
        vm.address = 'Where i live';
      },
      link: function(scope, element, attrs, controllers) {},
      controllerAs: 'customer',
      template: 'Name: {{::customer.name}} Address: {{::customer.address}}'
    };
  });


angular.module('myapp', [])
  .directive('goodBye', function() {
    return {
      restrict: 'E',
      scope: {
        name: '@'
      },
      template: function() {
        return 'good bye mr {{::name}}';
      }
    };
  });
