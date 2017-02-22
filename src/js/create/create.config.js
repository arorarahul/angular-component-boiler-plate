function CreateConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.create', {
    url: '/create-order',
    controller: 'CreateCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'create/create.html',
    title: 'Create Orders'
  });

};

export default CreateConfig;
