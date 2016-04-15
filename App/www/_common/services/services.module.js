(function() {
  'use strict';
  /**
  * @ngdoc overview
  * @name core.services
  * @requires app
  * @requires core
  * @description
  * <h1>Core Services</h1>
  * <p>This module allows to define all the service modules used in the App</p>
  */
  angular
  .module('app.core.services', [
    /* Angular Modules */

    /* Cross App Modules */
    'service.apppreferences',
    'service.device',
    'service.securestorage',
    'service.sqlitestorage',
    'service.networkinterface',

    /* 3rd-party Modules */
  ])

  ;

})(); // End Strict
