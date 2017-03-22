import React from 'react'

var Details = React.createClass({
	
	render: function() {
		return (
			<div className="detailPage">
                <div className="leftSide">
                <img className ="detailImg" src={this.props.collection.get('Images')[0].url_570xN}/>
                <div className="detailShop">{this.props.collection.get('Shop').shop_name}</div></div>
                <div className="rightSide">
                <div className ="detailTitle">{this.props.collection.get('title')}</div>
                <div className="detailDescription">{this.props.collection.get('description')}</div>
                </div>
            </div>
		)
	}
})

export default Details

