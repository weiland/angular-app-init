(function(document, angular) {

  'use strict';

  if(!angular) {
    console.error('no angular');
    return;
  }

  var modules = [];

  var originalNgModule = angular.module;
  angular.module = function(moduleName) {
    addModule(moduleName);
    return originalNgModule.apply(angular, arguments);
  };

  function addModule(moduleName) {
    if(modules.indexOf(moduleName) > -1) {
      return;
    }
    modules.push(moduleName);
    registerElement(moduleName);
  }

  function registerElement(elementName) {
    try {
      document.registerElement(elementName);
    } catch(e) {}
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    if(!modules.length) {
      return;
    }

    modules.forEach(function(moduleName) {
      var targetElement = document.getElementsByTagName(moduleName)[0] || document;
      angular.bootstrap(targetElement, [moduleName]);
    });

  });

})(document, angular);
