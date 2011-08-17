/* App Controllers */

function EventListCtrl() {
  var self = this;
    this.events = [
{
"date": "7/4/2011",
"day": "Monday",
"place_name": "Acid Bar",
"artiste": "Nelson",
"genre": "Acoustic",
"time": "1900-2100",
"price": "$$$ + $20 cover",
"description": "none",
},
{
"date": "7/4/2011",
"day": "Monday",
"place_name": "Acid Bar",
"artiste": "Tuna Pop",
"genre": "Acoustic",
"time": "2130-0045",
"price": "$$$ + $20 cover",
"description": "none",
},
{
"date": "7/4/2011",
"day": "Monday",
"place_name": "Blujaz Cafe",
"artiste": "Greg Lyons and 10 piece band, Omniform",
"genre": "Jazz",
"time": "2130",
"price": "$$ *Free entry",
"description": "What started off as a chance to play Greg’s arrangements has evolved to include all the individual characters that form the band. The repertoire is still made up largely of Greg’s compositions and wholly of his arrangements which draw from just about every genre of music. Omniform also features some awesome and very individual soloists. Monster Trio, sometimes a quartet consists of talented musicians.",
},
{
"date": "7/4/2011",
"day": "Monday",
"place_name": "Brix",
"artiste": "Shades",
"genre": "R&B; Soul; Calypso",
"time": "",
"price": "$$ *Free entry",
"description": "none",
},
{
"date": "7/4/2011",
"day": "Monday",
"place_name": "China One",
"artiste": "Tonelab",
"genre": "",
"time": "2100",
"price": "$$ *Free entry",
"description": "none",
},
{
"date": "7/4/2011",
"day": "Monday",
"place_name": "Crazy Elephant",
"artiste": "Crazy Elephant Band",
"genre": "Blues",
"time": "2200",
"price": "$ *Free entry",
"description": "none",
},
{
"date": "7/4/2011",
"day": "Monday",
"place_name": "Esplanade Concert Hall",
"artiste": "The 50s Rock & Roll",
"genre": "Rock",
"time": "1030; 1500",
"price": "$10-12",
"description": "Enjoy and rock to the music of the 50s including Johnny Be Good, Rock Around the Clock, Great Balls of Fire, Hound Dog, La Bamba and more, performed by home grown band Jerry N The Neu Faces!",
},
{
"date": "7/4/2011",
"day": "Monday",
"place_name": "Highlander",
"artiste": "Dejavu",
"genre": "Acoustic",
"time": "2130",
"price": "$ *Free entry",
"description": "none",
},
{
"date": "7/4/2011",
"day": "Monday",
"place_name": "Hood",
"artiste": "Wanyue",
"genre": "Pop",
"time": "",
"price": "$ *Free entry",
"description": "none",
},
{
"date": "7/4/2011",
"day": "Monday",
"place_name": "Quarubar",
"artiste": "Dawn Ho & Munir Alsagoff",
"genre": "Jazz; Latin; Tango",
"time": "",
"price": "$$$ *Free entry",
"description": "none",
},
{
"date": "7/4/2011",
"day": "Monday",
"place_name": "Timbre Arts House",
"artiste": "Surath & Rene",
"genre": "Jazz",
"time": "2030-2330",
"price": "$$ *Free entry",
"description": "none",
},
{
"date": "7/4/2011",
"day": "Monday",
"place_name": "Timbre Old School",
"artiste": "Pam & Chris",
"genre": "Jazz",
"time": "1945-2300",
"price": "$$ *Free entry",
"description": "none",
},
    ] }

function EventCatCtrl($route) {
	  var self = this;

	  $route.when('/event',
	              {template: 'partials/event-list.html',   controller: EventListCtrl});
	  $route.when('/event/:eventId',
				  {template: 'partials/event-detail.html', controller: EventDetailCtrl});
	  $route.when('/event/:artisteId',
	              {template: 'partials/artiste-detail.html', controller: ArtisteDetailCtrl});
	  $route.when('/event/:placeId',
				  {template: 'partials/place-detail.html', controller: PlaceDetailCtrl});
	  $route.otherwise({redirectTo: '/event'});

	  $route.onChange(function(){
	    self.params = $route.current.params;
	  });

	  $route.parent(this);
	}

	//PhoneCatCtrl.$inject = ['$route'];


	function EventListCtrl($xhr) {
	  var self = this;

	  $xhr('GET', 'event/event.json', function(code, response) {
	    self.event = response;
	  });

	  self.orderProp = 'days';
	}

	//EventListCtrl.$inject = ['$xhr'];
	
	
	function EventDetailCtrl($xhr) {
	  var self = this;

	  $xhr('GET', 'event/' + self.params.eventId + '.json', function(code, response) {
	    self.phone = response;
	  });
	}

	//PlaceDetailCtrl.$inject = ['$xhr'];	


	function ArtisteDetailCtrl($xhr) {
	  var self = this;

	  $xhr('GET', 'artiste/' + self.params.artisteId + '.json', function(code, response) {
	    self.phone = response;
	  });
	}

	//ArtisteDetailCtrl.$inject = ['$xhr'];

	function PlaceDetailCtrl($xhr) {
	  var self = this;

	  $xhr('GET', 'place/' + self.params.placeId + '.json', function(code, response) {
	    self.phone = response;
	  });
	}

	//PlaceDetailCtrl.$inject = ['$xhr'];

