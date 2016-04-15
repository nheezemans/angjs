(function () {
  'use strict';

  // dependencies: cordova-sqlite-storage
  // https://www.npmjs.com/package/cordova-sqlite-storage

  angular
  .module('service.sqlitestorage')
  .factory('sqlitestorage', sqlitestorage);

  sqlitestorage.$inject = ['$q', 'SQLITESTORAGECONSTANTS'];

  function sqlitestorage( $q, SQLITESTORAGECONSTANTS ) {
    // Variables
    var defer, db;

    // Services
    var service = {
      echoTest : echoTest,
      openSQLitedb : openSQLitedb,
      closeSQLitedb : closeSQLitedb,
      dbTransaction : dbTransaction
    };
    return service;

    // Check if DB is installed and available
    function echoTest( platform ){
      // Switch between plaftorms
      switch( platform ){
        case 'iOS':
        case 'Android':
        // Check if SQLite DB is installed
        window.sqlitePlugin.echoTest(
          function(){
            return true;
          }, function(){
            return false;
          });
        break;
        default:
          return false;
        break;
      }
    }

    // Open Database
    function openSQLitedb( name, location, platform ){
      // Switch between plaftorms
      switch( platform ){
        case 'iOS':
        case 'Android':
          db = window.sqlitePlugin.openDatabase({
            name: name,
            location: location
          }, function(){
            return true;
          }, function(){
            return false;
          });
        break;
        default:
          return false;
        break;
      }
    }

    // Close Database
    function closeSQLitedb(){
      // Set the defer
      defer = $q.defer();
      // Switch between plaftorms
      switch( platform ){
        case 'iOS':
        case 'Android':
          // Close the database
          db.close( defer.resolve( SQLITESTORAGECONSTANTS.SUCCESS.CLOSE_DB ), defer.reject( SQLITESTORAGECONSTANTS.ERROR.CLOSE_DB ) );
        break;
        default:
          defer.reject();
        break;
      }
    }

    // Transaction
    function dbTransaction( sqlStatements ){
      console.log( sqlStatements );
      console.log( 'DB: ', db );
      // Set the defer
      defer = $q.defer();
      // Do the transaction
      // db.transaction(function(tx) {
      //   tx.executeSql( sqlStatement, [], function(tx, res) {
      //     console.log("res.rows.item(0).uppertext: " + res.rows.item(0).uppertext);
      //   }, function(error) {
      //     console.log('DB Tranasction Error: ', error.message);
      //   });
      // }, function(error) {
      //   console.log('DB Tranasction Error: ', error.message);
      // }, function() {
      //   console.log('transaction ok');
      // });


    }


  }
})();
