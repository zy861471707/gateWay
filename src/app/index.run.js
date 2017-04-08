(function() {
  'use strict';

  angular
    .module('gateWay')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
