function BlocksConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.blocks', {
    url: '/order-blocks',
    controller: 'BlocksCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'blocks/blocks.html',
    title: 'order blocks'
  });

};

export default BlocksConfig;
