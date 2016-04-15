(function() {
  'use strict';
  /**
  * @ngdoc object
  * @name core.appload.constants
  * @requires app
  * @requires core
  * @requires core.appload
  * @description
  * <h1>Core Appload Constants</h1>
  * <p>Define the constants to be used in the Core Appload module.</p>
  */
  angular
    .module('app.core.appload')
    .constant('APPLOADCONSTANTS', {
      ROUTE: {
        STATE: 'appload',
        URL: '/appload',
        TEMPLATEURL: '_core/appload/appload.html',
        CONTROLLER: 'ApploadCtrl',
        CONTROLLERAS: 'appload'
      },
    });
})();
