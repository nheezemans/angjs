(function() {
  'use strict';
  /**
  * @ngdoc overview
  * @name app
  * @description
  * <h1>App module</h1>
  * <p>Primairy app.module where we can define all core and features modules that we use in this App</p>
  * @example
    <pre>
    angular
    .module('app', [
      //Everybody has access to these. Some of these modules like the app.core module have child modules.
      'ionic',
      'app.core',

      // Feature areas
      'app.dashboard',
    ]);
    </pre>
  */
  angular
  .module('app', [
    /**
    * Everybody has access to these. Some of these modules like the app.core module have child modules.
    */
    'ionic',
    'app.core',
    'app.core.layout',
    'app.core.appload',

    /**
    * Feature areas
    */
    'app.dashboard',

  ]);
})(); // End Strict
