import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import {MultiCollection} from './models/listingsModels'
import {SingleModel} from './models/detailsModels'
import ListingsPage from './views/listingsPage'
import DetailsPage from './views/detailsPage'
import MyListings from './views/myListings'

var baseUrl = 'https://openapi.etsy.com/v2/listings/active.js'
var searchUrl = 'https://openapi.etsy.com/v2/listings/'
var apiKey = '9sfgsyb7qbqbo1c79sraetsl'

var app = function() {
    var EtsyRouter = Backbone.Router.extend({
    // define url routes
    routes: {
        "home": "showMultiView",
        "search/:query": "performSearch",
        "details/:id": "showSingleView",
        "myListings": "showMyListings",
        "*default": "takeMeHome"
    },
    // route for home page
    showMultiView: function() {
        var homeInstance = new MultiCollection()
        var promise = homeInstance.fetch({ // send request for all etsy listings
            dataType: 'jsonp',
            data: {
                includes: "Images,Shop",
                "api_key": apiKey
            }
        })
        promise.then(function() {
        	ReactDOM.render(<ListingsPage multiCollection={homeInstance} />, document.querySelector('.container')) 
        
        })
    },

    takeMeHome: function() {
    	location.hash = 'home'
    },
        
    // route for queries
    performSearch: function(query) {
        var newSearch = new MultiCollection()
        var promise = newSearch.fetch({ // send request for particular etsy listings
            dataType: 'jsonp',
            data: {
                includes: "Images,Shop",
                "api_key": apiKey,
                keywords: query
            }
        })
       promise.then(function() {
        	ReactDOM.render(<ListingsPage multiCollection={newSearch} />, document.querySelector('.container')) 
        })
    },

    showSingleView: function(id) {
        var singleInstance = new SingleModel()
        singleInstance.url += id + '.js'
        var promise = singleInstance.fetch({
            dataType: 'jsonp',
            data: {
                includes: "Images,Shop",
                "api_key": apiKey
            }
        })
        promise.then(function() {
        	ReactDOM.render(<DetailsPage singleModel={singleInstance} />, document.querySelector('.container'))
        })
	},

    showMyListings: function() {
        ReactDOM.render(<MyListings />, document.querySelector('.container'))
    }
})
	new EtsyRouter()
    Backbone.history.start()
}



// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
    // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
