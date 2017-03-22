import STORE from './store.js'
import {ListingModel} from './models/myListingsModels.js'

var ACTIONS = {
	addListing: function(listingData) {

		var newListing = new ListingModel(listingData)

		newListing.save()
			.then(
				function(response) {
					ACTIONS.fetchAllListings()
				},
				function(err) {
				}
			)

		STORE.set({
			listingCollection: listingColl
		})
	},

	fetchAllListings: function() {
		var listingColl = STORE.get('listingCollection')
		listingColl.fetch()
			.then(function() {
				STORE.set({
					listingCollection: listingColl
				})
			})
	}
}

export default ACTIONS