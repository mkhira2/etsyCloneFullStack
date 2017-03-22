import React from 'react'
import Banner from './components/banner'
import Details from './components/details'
import ACTIONS from '../actions'
import MyListingsDisplay from './myListingsDisplay'

var MyListings = React.createClass({

	_handleSubmit: function(eventObj) {
		eventObj.preventDefault()
		var formEl = eventObj.target
		var ListingData = {
			item: formEl.item.value,
			price: formEl.price.value,
			description: formEl.description.value
		}
		formEl.reset()

		ACTIONS.addListing(ListingData)
		
	},

	render: function() {
		return (
			<div className="myListings">
				<Banner />
				<form onSubmit={this._handleSubmit} className="listingsForm">
					<h3>New Listing:</h3>
					<input placeholder='item' name='item'/>
					<input placeholder='price' name='price'/>
					<input placeholder='description' name='description'/>
					<button type='submit'>Submit</button>
					<h1>My Listings</h1>
					<MyListingsDisplay />
				</form>
			</div>
		)
	}
})

export default MyListings