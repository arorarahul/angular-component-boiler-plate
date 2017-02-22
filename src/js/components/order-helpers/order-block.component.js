class OrderBlockCtrl {
  constructor($scope) {
    'ngInject';

    this._$scope = $scope;

  }

  // pageRange(total) {
  //   let pages = [];

  //   for (var i = 0; i < total; i++) {
  //     pages.push(i + 1)
  //   }

  //   return pages;
  // }

  // changePage(number) {
  //   this._$scope.$emit('setPageTo', number);
  // }


}

let OrderBlock = {
  bindings: {
    // totalPages: '=',
    // currentPage: '='
  },
  controller: OrderBlockCtrl,
  templateUrl: 'components/order-helpers/order-block.html'
};

export default OrderBlock;
