(function() {
  'use strict';

  /**
  * @ngdoc overview
  * @name core
  * @requires app
  * @description
  * <h1>Core Module</h1>
  * <p>This module allows to include Core Angular Modules that we need for a MVP App.</p>
  * <p>!Important: Configure the DEFAULT_URL in the core.constants.js to set the default App Route.</p>
  * @example
  * <pre>
      (function() {
        'use strict';

        angular
        .module('app.core', [
          // Angular Modules

          // Core Cross App Modules
          // Example to load modules necessary for the MVP App to work
          'app.core.layout',
          'app.core.appload',
          'app.core.models',
          'app.core.services',

          //3rd-party Modules

        ]);

      })(); // End Strict
    </pre>
  */

  angular
  .module('app.core', [
    /* Angular Modules */

    /* Cross App Modules */
    'app.core.models',
    'app.core.services',

    /* 3rd-party Modules */

  ]);

})(); // End Strict
