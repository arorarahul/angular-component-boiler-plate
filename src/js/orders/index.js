import angular from 'angular';

// Create the module where our functionality can attach to
let ordersModule = angular.module('app.orders', []);

// Include our UI-Router config settings
import OrdersConfig from './orders.config';
ordersModule.config(OrdersConfig);


// Controllers
import OrdersCtrl from './orders.controller';
ordersModule.controller('OrdersCtrl', OrdersCtrl);


export default ordersModule;
