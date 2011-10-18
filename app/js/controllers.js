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