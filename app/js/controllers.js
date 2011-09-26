/* App Controllers */

function EventsCatCtrl($route) {
var self = this;

$route.when('/events', {template: 'partials/events-list.html', controller: EventsListCtrl});
$route.when('/home', {template: 'partials/events-list.html', controller: EventsListCtrl});
$route.when('/about', {template: 'partials/about.html', controller: EventsListCtrl});
$route.when('/contribute-contact', {template: 'partials/contribute-contact.html', controller: EventsListCtrl});
$route.otherwise({redirectTo: '/events'});

$route.onChange(function(){
self.params = $route.current.params;
});

$route.parent(this);
}

//EventsCatCtrl.$inject = ['$route'];

function EventsListCtrl() {
var self = this;
this.events = events;
}