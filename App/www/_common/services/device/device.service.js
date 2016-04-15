(function() {
  'use strict';

  angular
  .module('service.device')
  .factory('deviceservice', deviceservice);

  deviceservice.$inject = ['$q'];

  function deviceservice($q) {
    var defer;
    // Services
    var service = {

    };
    return service;
  }
})();
