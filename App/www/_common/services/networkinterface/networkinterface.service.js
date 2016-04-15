(function() {
  'use strict';

  angular
  .module('service.networkinterface')
  .factory('networkinterfaceservice', networkinterfaceservice);

  networkinterfaceservice.$inject = [];

  function networkinterfaceservice() {
    var defer, ipaddress;
    // Services
    var service = {
      getIPAddress : getIPAddress,
      ipAddress : ipAddress
    };
    return service;

    /**
     * getIPAddress
     * Method to retreive the IP-address from a Mobile Device
     */
    function getIPAddress(){
      // Get the IP Adress from the device via the cordova-plugin-networkinterface plugin
      networkinterface.getIPAddress(
        function(ip){
          ipaddress = ip;
          return ip;
        },function(iperror){
          return false;
        }
      );
    }

    /**
     * ipAddress
     * return the Stored IP Adress stored by getIPAddress
     */
    function ipAddress(){
      if( ipaddress ){
        return ipaddress;
      } else {
        return false;
      }
    }

  }
})();
