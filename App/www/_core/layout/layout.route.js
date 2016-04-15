(function() {
  'use strict';

  /**
  * @ngdoc object
  * @name core.layout.route
  * @description
  * <h1>Core Layout Route</h1>
  * <p>The Core Layout Route is a Cross App Config Object which allows you the specify the default layout with a nav-view.</p>
  * <p>Other module templates will be loaded into the nav-view in the layout.html file, f.e. the Dasboard template.</p>
  * @requires app
  * @requires core
  * @requires core.layout
  */

  angular
    .module('app.core.layout')
    .config(route);
  route.$inject = ['$stateProvider'];

  function route($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: '_core/layout/layout.html',
        controller: 'LayoutCtrl',
        controllerAs: 'layout'
      });
  }
})();
