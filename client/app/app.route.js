'use strict';

angular.module('CitrixApp')
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
        .state('', {
          url : '',
          templateUrl: '',
          authenticate: false,
          data : {}
        });

        $urlRouterProvider.otherwise('');
  }
])

/**
 * Run function of angularJS
 */
.run(function ($rootScope, $state) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){

  });
});
