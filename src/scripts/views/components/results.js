import React from 'react'

var Results = React.createClass({

	_makeListings: function() {
		var newArray = []
		for (var i = 0; i < this.props.collection.models.length; i++) {
			newArray.push(<Listing key={this.props.collection.models[i].cid} model={this.props.collection.models[i]} />)
		}
		return newArray
	},

	render: function() {
		return (
			<div>
				{this._makeListings()}
            </div>
		)
	}
})

var Listing = React.createClass({
	
	render: function() {
		return (
				<a href={`#details/${this.props.model.get('listing_id')}`}>
					<div className="itemContainer">
                		<img className="image" src={this.props.model.get('Images')[0].url_170x135}/>
     					<div className="title">{this.props.model.get('title')}</div>
     					<div className="price">{'$'}{this.props.model.get('price')}</div>
     				</div>
            	</a>
            	
           

		)
	}
})

export default Results