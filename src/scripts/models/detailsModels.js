import Backbone from 'backbone'

export var SingleModel = Backbone.Model.extend({
    url: 'https://openapi.etsy.com/v2/listings/',
    parse: function(apiResponse) { // obtain json data for home page
        return apiResponse.results[0]
    }
})