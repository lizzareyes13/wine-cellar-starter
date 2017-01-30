function $routeCtrl($route){
  var self = this;
  $route.when('/', {template:'index.html'})
  $route.when('/wines', {template:'templates/welcome.html'});
  $route.when('/wines/:wineId', {template:'templates/wine-details.html', controller:WineDetailCtrl});
  $route.otherwise({redirectTo:'/wines'});

  $route.onChange(function(){
    self.params = $route.current.params;
  });
  $route.parent(this);
  this.addWine = function(){
    window.location = "#/wines/add";
  };
}

function WineListCtrl(Wine){
  this.wines = Wine.query();
}

function WineDetailCtrl(Wine){
  this.wine = Wine.get({wineId:this.params.wineId});

  this.saveWine = function(){
    if (this.wine.id > 0)
        this.wine.$update({wineId:this.wine.id});
    else
      this.wine.$save();
      wine.location = "#/wines";
  }

  this.deleteWine = function(){
    this.wine.$delete({wineId:this.wine.id}, function(){
      alert('Wine' + wine.name + ' was successfully deleted')
      windows.location = "#/wines";
    });
  }

}
