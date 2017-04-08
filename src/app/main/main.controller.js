(function() {
  'use strict';

  angular
    .module('gateWay.main')
    .controller('MainController', MainController);

  /** @ngInject */
  // MainController.$inject = ['$timeout','$scope','$state'];
  function MainController($timeout,$state,$log) {
    var vm = this;
  	vm.register = function(){
      console.log(11111)
  		$state.go('home.login');
  	};
  };
})();
