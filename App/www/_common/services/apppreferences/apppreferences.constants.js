(function() {
  'use strict';

  angular
    .module('service.apppreferences')
    .constant('APPPREFERENCESCONSTANTS', {
      ERROR: {
        GETVARIABLE : {
          'status' : 404
        }
      }
    });
})();
