/* App Controllers */

function EventsCatCtrl($route) {
  var self = this;

  $route.when('/events', {template: 'partials/events-list.html', controller: EventsListCtrl});
  $route.when('/search', {template: 'partials/events-list.html', controller: EventsListCtrl});
  $route.when('/about', {template: 'partials/about.html', controller: EventsListCtrl});
  $route.when('/join-us', {template: 'partials/join-us.html', controller: EventsListCtrl});
  $route.otherwise({redirectTo: '/events'});

  $route.onChange(function(){
    self.params = $route.current.params;
  });

  $route.parent(this);
}

//EventsCatCtrl.$inject = ['$route'];

function EventsListCtrl() {
  var self = this;
  this._gaq = _gaq
  this.events = events;
}

function Main() {
  this.filter = function(event) {
    var query = this.query.toLowerCase();
    if (this.date && event.date !== this.date) return false;
    if (query)
      return (event.name.toLowerCase().indexOf(query) && event.place.toLowerCase().indexOf(query) && 
              event.genre.toLowerCase().indexOf(query) && event.price.toLowerCase().indexOf(query)) !== -1;
    return true;
  };
}