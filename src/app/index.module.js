(function() {
  'use strict';

  angular
    .module('gateWay', [
	 'ngAnimate', 
	 'ngCookies', 
	 'ngTouch',
	 'ngSanitize', 
	 'ngMessages', 
	 'ngAria', 
	 'restangular', 
	 'ui.router', 
	 'ui.bootstrap', 
	 'toastr',
	 'gateWay.components',
	 'gateWay.main'
    ]);
    angular.module('gateWay.main', []);
    angular.module('gateWay.components', ['gateWay.login']);
})();
