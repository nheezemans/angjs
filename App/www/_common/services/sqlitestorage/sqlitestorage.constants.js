(function() {
  'use strict';

  angular
    .module('service.sqlitestorage')
    .constant('SQLITESTORAGECONSTANTS', {
      SUCCESS:{
        ECHOTEST: {
          'success' : 200
        },
        OPEN_DB: 'Success opening DB',
        CLOSE_DB: 'Success closing DB'
      },
      ERROR:{
        ECHOTEST: {
          'success' : 404
        },
        OPEN_DB: 'Error opening DB',
        CLOSE_DB: 'Error closing DB'
      }
    });
})();
