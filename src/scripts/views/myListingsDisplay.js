
import React from 'react'
import MyListings from './myListings.js'
import STORE from '../store.js'
import ACTIONS from '../actions.js'

var MyListingsDisplay = React.createClass({
	componentWillMount: function() {
		ACTIONS.fetchAllListings()
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},

	getInitialState: function() {
		return STORE.data
	},

	 render: function() {
	 	return (
	 		<div className='listingsPage' >
	 			<ListingsList listingCollection={this.state.listingCollection} />
	 		</div>
	 	)
 	}
})

var ListingsList = React.createClass({
	_makeListing: function(model) {
		return <Listing listingModel={model} key={model.cid} />
	},

	render: function() {
		return (
			<div className="listingsList">
				{this.props.listingCollection.map(this._makeListing)}
			</div>
		)
	}
})

var Listing = React.createClass({
	render: function() {
		return (
			<div className="listingContainer">
				<h2 className="listingText">Item:&nbsp;
				{this.props.listingModel.get('item')}
				</h2>
				<h2 className="listingText">Price:&nbsp;
				{this.props.listingModel.get('price')}
				</h2>
				<h2 className="listingText">Description:&nbsp;
				{this.props.listingModel.get('description')}
				</h2>
			</div>
		)
	}
})

export default MyListingsDisplay