'use strict';
(function(module) {

  let productView = {};

  function Product (opts) {
    this.title = opts.title;
    this.price = opts.price;
    this.productImg = opts.productImg;
    this.type = opts.type;
  }

  Product.all = [];

  Product.prototype.toHtml = function() {
    let template = Handlebars.compile($('#product-template').text());
    return template(this);
  };

  Product.loadAll = function(projectsData) {
    projectsData.forEach(function(ele) {
      Product.all.push(new Product(ele));
    });
  }

  productView.productRender = function() {
    Product.all.forEach(function(a) {
      $('#shelf').append(a.toHtml());
    });
  };

  Product.fetchAll = function(callback) {
      $.getJSON('/productData.json')
      .then(function(productData) {
        Product.loadAll(productData);
        localStorage.setItem('productData', JSON.stringify(productData));
        productView.productRender();
      })
      .then(function() {
        if (callback)
          callback();
      })
    };

  Product.fetchAll();
  module.Product = Product;
}) (window);
