(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
    };
  });

  var gems = [
    {
        name: 'Dodecahedron',
        price: 2.9,
        description: 'Coolest Gem Evar',
        canPurchase: false,
        soldOut: true,
        images: [
          {
          full: 'ruby-gem.png'
          }
        ],
        reviews: [
          {
            stars: 5,
            body: "I just love this gem!",
            author: "joe@thomas.com"
          }
        ]
    },
    {
        name: 'Ryan\'s Gem',
        price: 102.95,
        description: '1st Coolest Gem Evar',
        canPurchase: true,
        soldOut: false,
        images: [
          {
          full: 'ruby-gem.png'
          }
        ],
        reviews: [
          {
            stars: 2,
            body: "It's ok",
            author: "joeschmo@smith.com"
          }
        ]
    }
  ]; 

})();