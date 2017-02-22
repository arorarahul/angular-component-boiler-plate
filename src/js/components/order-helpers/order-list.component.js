class OrderListCtrl {
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

let OrderList = {
  bindings: {
    // totalPages: '=',
    // currentPage: '='
  },
  controller: OrderListCtrl,
  templateUrl: 'components/order-helpers/order-list.html'
};

export default OrderList;
