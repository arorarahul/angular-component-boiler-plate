import angular from 'angular';

// Create the module where our functionality can attach to
let blocksModule = angular.module('app.blocks', []);

// Include our UI-Router config settings
import BlocksConfig from './blocks.config';
blocksModule.config(BlocksConfig);


// Controllers
import BlocksCtrl from './blocks.controller';
blocksModule.controller('BlocksCtrl', BlocksCtrl);


export default blocksModule;
