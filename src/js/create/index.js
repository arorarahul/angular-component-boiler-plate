import angular from 'angular';

// Create the module where our functionality can attach to
let createModule = angular.module('app.create', []);

// Include our UI-Router config settings
import CreateConfig from './create.config';
createModule.config(CreateConfig);


// Controllers
import CreateCtrl from './create.controller';
createModule.controller('CreateCtrl', CreateCtrl);


export default createModule;
