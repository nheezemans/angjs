(function() {
  'use strict';

  angular
  .module('service.apppreferences')
  .factory('apppreferences', apppreferences);

  apppreferences.$inject = [ 'APPPREFERENCESCONSTANTS' ];

  function apppreferences( APPPREFERENCESCONSTANTS ) {
    var variables = [];

    // Services
    var service = {
      storeVariable : storeVariable,
      getVariable : getVariable,
      removeVariable : removeVariable
    };
    return service;

    // Store a new or update an extisting variable
    function storeVariable( key, value ){
      variables.key = value;
    }

    // Store a variable
    function getVariable( key ){
      if( variables.key ){
        return variables.key;
      } else {
        return APPPREFERENCESCONSTANTS.ERROR.GETVARIABLE;
      }
    }

    // Store a variable
    function removeVariable( key ){
      delete variables.key;
    }

  }
})();
