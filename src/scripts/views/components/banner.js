import React from 'react'

var Banner = React.createClass({

	_handleKeyDown: function(evtObj) {
		if (evtObj.keyCode === 13) {
			location.hash = `search/${evtObj.target.value}`
			evtObj.target.value = ''
		}
	},

	render: function(){
		return (
			<div className="banner">
				<a href="#home" className="headline"><h1>Do You Even Etsy, Bro?</h1></a>
    			<hr />
    			<div className='navBar'>
    				<input className='search' placeholder="You lookin' for teeth?" onKeyDown={this._handleKeyDown}/>
    				<div className="links">Or perhaps you'd enjoy:
        			<a href="#search/vintage vinyl records" className="suggestion">Vintage Vinyl</a>
        			<a href="#search/crazy cufflinks" className="suggestion">Cool Cufflinks</a>
        			<a href="#search/handmade wallet" className="suggestion">Weird Wallets</a>
        			<a href="#search/crazy neckties" className="suggestion">Trippy Ties</a>
        			<hr />
    				</div>
    				<div className='myListings'>My Listings:
    				<a href="#myListings" className="listings"> My Listings</a>
    				</div>
				</div>
			</div>
		)
	}
})

export default Banner