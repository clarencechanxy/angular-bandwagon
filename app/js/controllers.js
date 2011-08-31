/* App Controllers */

function EventsCatCtrl($route) {
var self = this;

$route.when('/events', {template: 'partials/events-list.html', controller: EventsListCtrl});
$route.when('/place/:place', {template: 'partials/place-detail.html', controller: EventsListCtrl});
$route.when('/artiste/:artiste', {template: 'partials/artiste-detail.html', controller: EventsListCtrl});
$route.otherwise({redirectTo: '/events'});

$route.onChange(function(){
self.params = $route.current.params;
});

$route.parent(this);
}

//EventsCatCtrl.$inject = ['$route'];

function Event_list () {
	
	{
	"date": "7/4/2011",
	"day": "Monday",
	"place": "Acid Bar",
	"artiste": "Nelson",
	"genre": "Acoustic",
	"time": "1900-2100",
	"price": "$$$ + $20 cover",
	"description": "none",
	},
	{
	"date": "7/4/2011",
	"day": "Monday",
	"place": "Acid Bar",
	"artiste": "Tuna Pop",
	"genre": "Acoustic",
	"time": "2130-0045",
	"price": "$$$ + $20 cover",
	"description": "none",
	},
	{
	"date": "7/4/2011",
	"day": "Monday",
	"place": "Blujaz Cafe",
	"artiste": "Greg Lyons and 10 piece band, Omniform",
	"genre": "Jazz",
	"time": "2130",
	"price": "$$ (Free entry)",
	"description": "What started off as a chance to play Greg’s arrangements has evolved to include all the individual characters that form the band. The repertoire is still made up largely of Greg’s compositions and wholly of his arrangements which draw from just about every genre of music. Omniform also features some awesome and very individual soloists. Monster Trio, sometimes a quartet consists of talented musicians.",
	},
	{
	"date": "7/4/2011",
	"day": "Monday",
	"place": "Brix",
	"artiste": "Shades",
	"genre": "R&B; Soul; Calypso",
	"time": "",
	"price": "$$ (Free entry)",
	"description": "none",
	},
	{
	"date": "7/4/2011",
	"day": "Monday",
	"place": "China One",
	"artiste": "Tonelab",
	"genre": "",
	"time": "2100",
	"price": "$$ (Free entry)",
	"description": "none",
	},
	{
	"date": "7/4/2011",
	"day": "Monday",
	"place": "Crazy Elephant",
	"artiste": "Crazy Elephant Band",
	"genre": "Blues",
	"time": "2200",
	"price": "$ (Free entry)",
	"description": "none",
	},
	{
	"date": "7/4/2011",
	"day": "Monday",
	"place": "Esplanade Concert Hall",
	"artiste": "The 50s Rock & Roll",
	"genre": "Rock",
	"time": "1030; 1500",
	"price": "$10-12",
	"description": "Enjoy and rock to the music of the 50s including Johnny Be Good, Rock Around the Clock, Great Balls of Fire, Hound Dog, La Bamba and more, performed by home grown band Jerry N The Neu Faces!",
	}
	
}

function Place_list () {
	
	"Acid Bar": {
	"place": "Acid Bar",
	"address": "180 Orchard Road, Peranakan Place",
	"postal": "238846",
	"tel": "6738 8828",
	"details": "Aptly described as an enclave with edge and soul by grungy barflies and creative cracks. Experience a blend of sensory elements and take flight to a different plane. Acoustic sessions featuring genres of radio alternatives, top 40s and an occasional touch of percussions are played nightly from 7pm. Consume nightly before rest a myriad of concoctions; tray of 25 apple/lychee shooters and buckets of the golden juice with touch go budgets. Fret not growling guts as our kitchen maestro whips up tantelicious hot chicken wings and crunchy calamari while acid bar croons and the blue cows dance.",
	},
	"Blujaz Cafe": {
	"address": "11 Bali Lane",
	"postal": "189848",
	"tel": "6292 3800",
	"details": "At BluJaz, we believe in the simple things of life. Simple things that have somehow become so hard to find. Good food. Love. Laughter. Friends. Family. Music. Conversation. And decent prices, because no one should be allowed to pay fifty dollars for a meal.",
	}
	
	
}

function Artiste_list () {
	
	"Nelson": {
	"details": "Lorem Ipsum",
	"link": "http://www.youtube.com",
	},
	"Tuna Pop": {
	"details": "Lorem Ipsum",
	"link": "http://www.youtube.com",
	}
	
}	


function EventsListCtrl() {
var self = this;
	this.events = Event_list;
	this.places = Place_list;
	this.artistes = Artiste_list;

}
