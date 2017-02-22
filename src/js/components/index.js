import angular from 'angular';

let componentsModule = angular.module('app.components', []);


// import ListErrors from './list-errors.component'
// componentsModule.component('listErrors', ListErrors);

// import ShowAuthed from './show-authed.directive';
// componentsModule.directive('showAuthed', ShowAuthed);

import SearchOrders from './search/search.component';
componentsModule.component('searchOrders', SearchOrders);

// import ArticleMeta from './article-helpers/article-meta.component';
// componentsModule.component('articleMeta', ArticleMeta);

// import FavoriteBtn from './buttons/favorite-btn.component';
// componentsModule.component('favoriteBtn', FavoriteBtn);

// import ArticlePreview from './article-helpers/article-preview.component';
// componentsModule.component('articlePreview', ArticlePreview);

// import ArticleList from './article-helpers/article-list.component';
// componentsModule.component('articleList', ArticleList);

import OrderList from './order-helpers/order-list.component';
componentsModule.component('orderList', OrderList);

import OrderBlock from './order-helpers/order-block.component';
componentsModule.component('orderBlock', OrderBlock);

export default componentsModule;
