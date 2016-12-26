'use strict';

angular.module('JSEnd')
//=========================================================================
//Configuring CitrixApp
//=========================================================================
.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

	  /**
	   * Routes definition for navigation
	   */
      $stateProvider

      /**
       * Login Route
       */
        .state('dashboard', {
          url : '/dashboard',
          templateUrl: '/client/app/components/dashboard/dashboard.view.html',
					// controller : 'dashboardController',
					// controllerAs : 'dashCtrl',
          authenticate: false,
          data : {}
        });

        $urlRouterProvider.otherwise('dashboard');
  }
])

/**
 * Run function of angularJS
 */
.run(function ($rootScope, $state) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){

  });
});
