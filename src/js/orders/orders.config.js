function OrdersConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.orders', {
    url: '/',
    controller: 'OrdersCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'orders/orders.html',
    title: 'Orders'
  });

};

export default OrdersConfig;
