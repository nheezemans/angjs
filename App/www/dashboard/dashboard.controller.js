(function() {
  'use strict';
  /**
  * @ngdoc controller
  * @name dashboard.controller
  * @requires app
  * @requires core
  * @description
  * <h1>Dashboard Controller</h1>
  * <p>The Dashboard controller lalalala</p>
  * <h2>Methods</h2>
  *
  */
  angular
    .module('app.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

  // Inject dependencies
  DashboardCtrl.$inject = [  ];

  // Start the DashboardCtrl
  function DashboardCtrl() {
    var dashboard = this;

    // Activate all methods
    activateDashboard();

    function activateDashboard() {

      return dashboard;
    }
  }
})();
