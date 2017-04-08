(function() {
  'use strict';

  angular
    .module('gateWay')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/gateWay');
    $stateProvider
      .state('home', {
        url: '/gateWay',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
    //登录模块路由
    $stateProvider.state('home.login', {
      url: '/login',
      templateUrl: 'app/components/login/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    });
    
  }

})();
