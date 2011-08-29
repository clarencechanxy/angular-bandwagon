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
			"place": "Acid Bar",
			"address": "180 Orchard Road, Peranakan Place",
			"postal": "238846",
			"tel": "6738 8828",
			"details": "Aptly described as an enclave with edge and soul by grungy barflies and creative cracks. Experience a blend of sensory elements and take flight to a different plane. Acoustic sessions featuring genres of radio alternatives, top 40s and an occasional touch of percussions are played nightly from 7pm.  Consume nightly before rest a myriad of concoctions; tray of 25 apple/lychee shooters and buckets of the golden juice with touch go budgets.  Fret not growling guts as our kitchen maestro whips up tantelicious hot chicken wings and crunchy calamari while acid bar croons and the blue cows dance.",
			},
		  "Blujaz Cafe": {
			"address": "11 Bali Lane",
			"postal": "189848",
			"tel": "6292 3800",
			"details": "At BluJaz, we believe in the simple things of life. Simple things that have somehow become so hard to find. Good food. Love. Laughter. Friends. Family. Music. Conversation. And decent prices, because no one should be allowed to pay fifty dollars for a meal.",
			}
		}	
		
	}

/*function PlacesDetailCtrl() {
	var self = this;
	this.places =
	[
	{
	"place": "Acid Bar",
	"address": "180 Orchard Road, Peranakan Place",
	"postal": "238846",
	"tel": "6738 8828",
	"details": "Aptly described as an enclave with edge and soul by grungy barflies and creative cracks. Experience a blend of sensory elements and take flight to a different plane. Acoustic sessions featuring genres of radio alternatives, top 40s and an occasional touch of percussions are played nightly from 7pm.  Consume nightly before rest a myriad of concoctions; tray of 25 apple/lychee shooters and buckets of the golden juice with touch go budgets.  Fret not growling guts as our kitchen maestro whips up tantelicious hot chicken wings and crunchy calamari while acid bar croons and the blue cows dance.",
	},
	{
	"place": "Blujaz Cafe",
	"address": "11 Bali Lane",
	"postal": "189848",
	"tel": "6292 3800",
	"details": "At BluJaz, we believe in the simple things of life. Simple things that have somehow become so hard to find. Good food. Love. Laughter. Friends. Family. Music. Conversation. And decent prices, because no one should be allowed to pay fifty dollars for a meal.",
	},
	{
	"place": "Brix",
	"address": "10 Scotts Rd, Basement, Grand Hyatt Singapore",
	"postal": "228211",
	"tel": "6732-1234",
	"details": "There’s a lively yet sophisticated feel to Brix, buried in the basement of the Grand Hyatt Regency. Despite its subterranean location, it’s not at all dingy, and crowds flock here to enjoy the live music from the popular house band. International bands occasionally perform too. Divided in two, a Music Bar, where the band play a pleasing blend of jazz and R&B, and a Wine & Whiskey Bar, which, good to its name, serves up a fine selection of wine, Scotch, and cognac. It can get quite lively on the weekend, the blend of music, dancing and decent drinks, unsurprisingly proving alluring, so dress to impress to ensure you get in. Reservations are also recommended on busy nights.",
	},
	{
	"place": "China One",
	"address": "Block 3E River Valley Road #02-01 Clarke Quay",
	"postal": "179024",
	"tel": "6339 0280",
	"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ante in arcu consequat vel mollis nisi auctor. Aenean convallis, erat nec ultrices gravida, diam ligula pellentesque mauris, eget hendrerit lorem mauris at turpis. Suspendisse fringilla egestas augue vel varius. Etiam lorem est, viverra vel convallis in, volutpat sed risus. Sed ac orci tortor, sed euismod neque. Mauris nibh libero, varius in molestie at, accumsan ullamcorper mauris. Ut eu urna nec mauris volutpat suscipit et ac dui.",
	},
	{
	"place": "Crazy Elephant",
	"address": "Clarke Quay, 3E River Valley Road, #01-03/04",
	"postal": "179024",
	"tel": "6337 7859",
	"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ante in arcu consequat vel mollis nisi auctor. Aenean convallis, erat nec ultrices gravida, diam ligula pellentesque mauris, eget hendrerit lorem mauris at turpis. Suspendisse fringilla egestas augue vel varius. Etiam lorem est, viverra vel convallis in, volutpat sed risus. Sed ac orci tortor, sed euismod neque. Mauris nibh libero, varius in molestie at, accumsan ullamcorper mauris. Ut eu urna nec mauris volutpat suscipit et ac dui.",
	},
	{
	"place": "Esplanade Concert Hall",
	"address": "1 Esplanade Drive",
	"postal": "38981",
	"tel": "8288377",
	"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ante in arcu consequat vel mollis nisi auctor. Aenean convallis, erat nec ultrices gravida, diam ligula pellentesque mauris, eget hendrerit lorem mauris at turpis. Suspendisse fringilla egestas augue vel varius. Etiam lorem est, viverra vel convallis in, volutpat sed risus. Sed ac orci tortor, sed euismod neque. Mauris nibh libero, varius in molestie at, accumsan ullamcorper mauris. Ut eu urna nec mauris volutpat suscipit et ac dui.",
	},
	{
	"place": "Highlander",
	"address": "Block 3B The Foundry #01-11 Clarke Quay River Valley Road",
	"postal": "179021",
	"tel": "6235 9528",
	"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ante in arcu consequat vel mollis nisi auctor. Aenean convallis, erat nec ultrices gravida, diam ligula pellentesque mauris, eget hendrerit lorem mauris at turpis. Suspendisse fringilla egestas augue vel varius. Etiam lorem est, viverra vel convallis in, volutpat sed risus. Sed ac orci tortor, sed euismod neque. Mauris nibh libero, varius in molestie at, accumsan ullamcorper mauris. Ut eu urna nec mauris volutpat suscipit et ac dui.",
	},
	{
	"place": "Hood",
	"address": "55 Keong Saik Road",
	"postal": "89158",
	"tel": "62218846",
	"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ante in arcu consequat vel mollis nisi auctor. Aenean convallis, erat nec ultrices gravida, diam ligula pellentesque mauris, eget hendrerit lorem mauris at turpis. Suspendisse fringilla egestas augue vel varius. Etiam lorem est, viverra vel convallis in, volutpat sed risus. Sed ac orci tortor, sed euismod neque. Mauris nibh libero, varius in molestie at, accumsan ullamcorper mauris. Ut eu urna nec mauris volutpat suscipit et ac dui.",
	},
	{
	"place": "Quarubar",
	"address": "113 Frankel Ave",
	"postal": "458230",
	"tel": "6243 0113",
	"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ante in arcu consequat vel mollis nisi auctor. Aenean convallis, erat nec ultrices gravida, diam ligula pellentesque mauris, eget hendrerit lorem mauris at turpis. Suspendisse fringilla egestas augue vel varius. Etiam lorem est, viverra vel convallis in, volutpat sed risus. Sed ac orci tortor, sed euismod neque. Mauris nibh libero, varius in molestie at, accumsan ullamcorper mauris. Ut eu urna nec mauris volutpat suscipit et ac dui.",
	},
	{
	"place": "Timbre Arts House",
	"address": "1 Old Parliament Lane",
	"postal": "179429",
	"tel": "6332 6900",
	"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ante in arcu consequat vel mollis nisi auctor. Aenean convallis, erat nec ultrices gravida, diam ligula pellentesque mauris, eget hendrerit lorem mauris at turpis. Suspendisse fringilla egestas augue vel varius. Etiam lorem est, viverra vel convallis in, volutpat sed risus. Sed ac orci tortor, sed euismod neque. Mauris nibh libero, varius in molestie at, accumsan ullamcorper mauris. Ut eu urna nec mauris volutpat suscipit et ac dui.",
	},
	{
	"place": "Timbre Old School",
	"address": "11A Mount Sophia",
	"postal": "179936",
	"tel": "6338 8277",
	"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ante in arcu consequat vel mollis nisi auctor. Aenean convallis, erat nec ultrices gravida, diam ligula pellentesque mauris, eget hendrerit lorem mauris at turpis. Suspendisse fringilla egestas augue vel varius. Etiam lorem est, viverra vel convallis in, volutpat sed risus. Sed ac orci tortor, sed euismod neque. Mauris nibh libero, varius in molestie at, accumsan ullamcorper mauris. Ut eu urna nec mauris volutpat suscipit et ac dui.",
	},
	{
	"place": "Timbre Substation",
	"address": "45 Armenian Street",
	"postal": "179936",
	"tel": "6338 8277",
	"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ante in arcu consequat vel mollis nisi auctor. Aenean convallis, erat nec ultrices gravida, diam ligula pellentesque mauris, eget hendrerit lorem mauris at turpis. Suspendisse fringilla egestas augue vel varius. Etiam lorem est, viverra vel convallis in, volutpat sed risus. Sed ac orci tortor, sed euismod neque. Mauris nibh libero, varius in molestie at, accumsan ullamcorper mauris. Ut eu urna nec mauris volutpat suscipit et ac dui.",
	},
	{
	"place": "Wala Wala",
	"address": "31 Lorong Mambong Holland Village",
	"postal": "277689",
	"tel": "64624288",
	"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ante in arcu consequat vel mollis nisi auctor. Aenean convallis, erat nec ultrices gravida, diam ligula pellentesque mauris, eget hendrerit lorem mauris at turpis. Suspendisse fringilla egestas augue vel varius. Etiam lorem est, viverra vel convallis in, volutpat sed risus. Sed ac orci tortor, sed euismod neque. Mauris nibh libero, varius in molestie at, accumsan ullamcorper mauris. Ut eu urna nec mauris volutpat suscipit et ac dui.",
	},
	{
	"place": "Yello Jello Retrobar",
	"address": "Clarke Quay, Blk 3C The Cannery, River Valley Rd, #01-06",
	"postal": "179021",
	"tel": "6887 3733",
	"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit ante in arcu consequat vel mollis nisi auctor. Aenean convallis, erat nec ultrices gravida, diam ligula pellentesque mauris, eget hendrerit lorem mauris at turpis. Suspendisse fringilla egestas augue vel varius. Etiam lorem est, viverra vel convallis in, volutpat sed risus. Sed ac orci tortor, sed euismod neque. Mauris nibh libero, varius in molestie at, accumsan ullamcorper mauris. Ut eu urna nec mauris volutpat suscipit et ac dui.",
	},
	] 
	
	
} */

