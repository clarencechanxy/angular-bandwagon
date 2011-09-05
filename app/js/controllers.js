/* App Controllers */

function EventsCatCtrl($route) {
var self = this;

$route.when('/events', {template: 'partials/events-list.html', controller: EventsListCtrl});
$route.when('/full-events-list', {template: 'partials/full-events-list.html', controller: EventsListCtrl});
$route.when('/place/:place', {template: 'partials/place-detail.html', controller: EventsListCtrl});
$route.when('/artiste/:artiste', {template: 'partials/artiste-detail.html', controller: EventsListCtrl});
$route.otherwise({redirectTo: '/events'});

$route.onChange(function(){
self.params = $route.current.params;
});

$route.parent(this);
}

//EventsCatCtrl.$inject = ['$route'];

function EventsListCtrl() {
var self = this;
this.events =
[
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
]

this.places = {
"Acid Bar": {
"address": "180 Orchard Road, Peranakan Place",
"postal": "238846",
"tel": "6738 8828",
"website": "www.peranakanplace.com/acidbar.html",
"details": "Aptly described as an enclave with edge and soul by grungy barflies and creative cracks. Experience a blend of sensory elements and take flight to a different plane. Acoustic sessions featuring genres of radio alternatives, top 40s and an occasional touch of percussions are played nightly from 7pm.  Consume nightly before rest a myriad of concoctions; tray of 25 apple/lychee shooters and buckets of the golden juice with touch go budgets.  Fret not growling guts as our kitchen maestro whips up tantelicious hot chicken wings and crunchy calamari while acid bar croons and the blue cows dance.",
"latlng": "lat:1.3014626,lng:103.8391229",
"longitude": "103.8391229",
},
"Blujaz Cafe": {
"address": "11 Bali Lane",
"postal": "189848",
"tel": "6292 3800",
"website": "www.blujaz.net/",
"details": "At BluJaz, we believe in the simple things of life. Simple things that have somehow become so hard to find. Good food. Love. Laughter. Friends. Family. Music. Conversation. And decent prices, because no one should be allowed to pay fifty dollars for a meal.",
"latlng": "lat:1.300639,lng:103.858993",
"longitude": "103.858993",
},
"Brix": {
"address": "10 Scotts Rd, Basement, Grand Hyatt Singapore",
"postal": "228211",
"tel": "6732-1234",
"website": "http://singapore.grand.hyatt.com/hyatt/hotels/entertainment/lounges/index.jsp",
"details": "There’s a lively yet sophisticated feel to Brix, buried in the basement of the Grand Hyatt Regency. Despite its subterranean location, it’s not at all dingy, and crowds flock here to enjoy the live music from the popular house band. International bands occasionally perform too. Divided in two, a Music Bar, where the band play a pleasing blend of jazz and R&B, and a Wine & Whiskey Bar, which, good to its name, serves up a fine selection of wine, Scotch, and cognac. It can get quite lively on the weekend, the blend of music, dancing and decent drinks, unsurprisingly proving alluring, so dress to impress to ensure you get in. Reservations are also recommended on busy nights.",
"latlng": "lat:1.2894365,lng:103.8499802",
"longitude": "103.8499802",
},
}

this.artistes = {
"Nelson": {
"details": "Lorem Ipsum",
"link": "http://www.youtube.com",
},
"Tuna Pop": {
"details": "Lorem Ipsum",
"link": "http://www.youtube.com",
}
}

}