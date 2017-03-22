import React from 'react'
import Banner from './components/banner'
import Results from './components/results'

var ListingsPage = React.createClass({
	render: function() {
		return (
			<div className="listingsPage">
				<Banner />
				<Results collection={this.props.multiCollection} />
			</div>
		)
	}
})

export default ListingsPage