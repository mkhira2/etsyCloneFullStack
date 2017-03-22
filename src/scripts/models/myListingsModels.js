import Backbone from 'backbone'

export var ListingModel = Backbone.Model.extend({
	url: '/api/myListings',
	idAttribute: '_id'
})

export var ListingCollection = Backbone.Collection.extend({
	comparator: function(mod) {
		return new Date(mod.get('createdAt')).getTime() * -1
	},
	model: ListingModel,
	url: '/api/myListings'
})