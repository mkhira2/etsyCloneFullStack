import Backbone from 'backbone'
import {ListingCollection} from './models/myListingsModels.js'

const STORE = Object.assign({}, Backbone.Events, {
	data: {
		listingCollection: new ListingCollection()

	},
	get: function(prop) {

		if (this.data[prop] === undefined) {

			throw new Error('the store doesn\'t have a property called ' + prop)
		}
		return this.data[prop]
	},
	set: function(attrs) {
		this.data = Object.assign(this.data,attrs)
		this.trigger('dataUpdated')
	}
})

export default STORE 