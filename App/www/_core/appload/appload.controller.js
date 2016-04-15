(function() {
  'use strict';
  /**
  * @ngdoc controller
  * @name core.appload.controller:ApploadCtrl
  * @requires app
  * @requires core
  * @requires core.appload
  * @requires core.appload.constants
  * @description
  * <h1>Core Appload Controller</h1>
  * <p>The Core Appload Controller allows you to control the functionalities on App Startup before going to the Dashboard or Homepage.</p>
  * <p>Comes in handy when f.e. you would like to, for example, verify a networkconnection or verify a session.</p>
  */
  angular
    .module('app.core.appload')
    .controller('ApploadCtrl', ApploadCtrl);

  // Inject dependencies
  ApploadCtrl.$inject = ['$ionicPlatform', '$window', '$state', 'apppreferences', 'securestorage', 'sqlitestorage', 'networkinterfaceservice', 'APPLOADCONSTANTS'];

  // Start the DashboardCtrl
  function ApploadCtrl($ionicPlatform, $window, $state, apppreferences, securestorage, sqlitestorage, networkinterfaceservice, APPLOADCONSTANTS) {
    var appload = this;

    // Activate all methods
    activateAppload();

    function activateAppload() {
      // Wait until IonicPlatform is ready
      $ionicPlatform.ready(function() {
        /**
         * Check if this is a device or browser
         */
        if ($window.cordova){

          // Verify if the QSLite DB is available
          if( sqlitestorage.echoTest( $window.device.platform ) ){

          } else{

          }



          // Get the IP adress from the device
          networkinterfaceservice.getIPAddress().then( function( ip ){
            console.log( 'IP: ', ip );
            // $state.go( 'app.dashboard' );
          }, function(){
            console.log( 'NO IP!' );
            // $state.go( 'app.dashboard' );
          });



        } else {


        }

        return appload;
      });
    }
  }
})();
