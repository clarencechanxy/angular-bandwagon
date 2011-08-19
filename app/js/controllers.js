/* App Controllers */

function EventsCatCtrl($route) {
var self = this;

$route.when('/events', {template: 'partials/events-list.html', controller: EventsListCtrl});
$route.when('/place/:place', {template: 'partials/place-detail.html', controller: EventsListCtrl});
$route.otherwise({redirectTo: '/events'});

$route.onChange(function(){
self.params = $route.current.params;
});

$route.parent(this);
}

//EventsCatCtrl.$inject = ['$route'];

function EventsListCtrl($xhr) {
  var self = this;

  $xhr('GET', 'events/events.json', function(code, response) {
    self.events = response;
  });

  self.orderProp = 'day';
}

//EventsListCtrl.$inject = ['$xhr'];

