(function() {
  'use strict';
  /**
  * @ngdoc object
  * @name dashboard.route
  * @requires app
  * @requires core
  * @description
  * <h1>Dashboard Route</h1>
  * <p>This module configures the route, views, controllers and templates used by this module.</p>
  */
  angular
    .module('app.dashboard')
    .config(route);
  route.$inject = ['$stateProvider'];

  function route($stateProvider) {
    $stateProvider
    .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'appContent': {
          templateUrl: 'dashboard/dashboard.html',
          controller: 'DashboardCtrl',
          controllerAs: 'dashboard'
        }
      }
    });
  }
})();
