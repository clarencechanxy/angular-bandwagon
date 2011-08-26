// (c) 2011 Łukasz Twarogowski, Axiom Computing, axiomcomputing.pl 


TaskController.$inject=['$xhr','$invalidWidgets','$location','$route', '$log'];
TaskController.prototype = {
	getList: function()
	{
		self=this;
		this.$xhr('GET', '/tasks', function(code, res){
			self.list = res;
	});

	},
	vote: function(item){
		if(item.votes.hasVoted)
			return;
		item.votes.count++;
		item.votes.hasVoted=true;
	},
	addProgress: function(item, val){
		item.progress+=val;
	},
	save: function(){
		if(this.$invalidWidgets.length>0)
			return;
		if(!this.edited.id)
			this.list.splice(0,0,this.edited);
		else{
			var self=this;
			var item = _(this.list).detect(function(i){ return i.id == self.edited.id; });
			if(item)
				angular.Object.copy(this.edited, item);
			}    			
		this.newTask();
	},
	newTask: function(){
		this.edited = {votes:{count:0},progress:{},requestedBy:{},estimate:{},assignedTo:{},origin:{},status:'requested'};
	},
	edit: function(item){
		if(!item)
			return; //...
		this.edited = angular.Object.copy(item);
		this.$location.update({hashPath : '/tasks/'+item.id});
	},
	remove: function(item){
		if(confirm('na pewno???'))
			angular.Array.remove(this.list, item);
	},
	avg : function(pos1, pos2)
	{
		return {lat:(pos1.lat + pos2.lat)/2, lng: (pos1.lng+pos2.lng)/2};
	},
	getById: function(id){
		return _(this.list).detect(function(i){ return id == i.id; });
	},
	isSelected: function(item)
	{
		return (this.edited && item.id == this.edited.id) ? 'selected' : '';
	},
	registerRoutes: function ()
	{
		this.$route.when('/tasks/:taskId');
		var self = this;
		this.$route.onChange(function(){
			if(self.$route.current)
				self.edit(self.getById(parseInt(self.$route.current.params.taskId)));
	});
}


};



function TaskController($xhr, $invalidWidgets, $location, $route, $log){
	var self = this;
	this.$xhr = $xhr;
	this.$location = $location;
	this.$invalidWidgets = $invalidWidgets;
	this.$route = $route;
	this.$log = $log;

	//XHR error handling
	this.$xhr.error = function(req, res){
		var code;
	};


	this.list = [];
	this.date=new Date();
	this.newTask();
	this.getList();

	this.registerRoutes();

	this.maps = { a:{pin:{},view:{}}, b:{pin:{},view:{}}};
}