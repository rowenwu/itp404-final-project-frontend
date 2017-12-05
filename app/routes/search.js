import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  title: 'Create a plan',  
  queryParams: {
    keywords: {
      refreshModel: true,
    },
    location: {
      refreshModel: true,
    },
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    let markers = [];
    for(var i = 0; i < model.length; i++){
      markers.push({
        id: i,  // Recommended
        lat: model[i].venue.location.lat, // Required
        lng: model[i].venue.location.lng,     //Required
        infoWindow: {
          content: model[i].venue.name,
          visible: true
        },
        click(event, marker) {},
        mouseover(event, marker) {},
      })
    }
    controller.set('selectedPosition', -1);
    controller.setProperties({ 
      // selectedPosition: -1,
      model: model,
      lat: model[0].venue.location.lat,
      lng: model[0].venue.location.lng,
      zoom: 11,
      markers: markers
    });
  },
  model(params) {
    if(params.location != null){
      console.log("here");

      return $.ajax({
        type: 'GET',
        url: 'https://api.foursquare.com/v2/venues/explore',
        data: {
          client_id: 'MSVU5SD1IF33JNIPQGEYRLKNPHL3OQYIZFWPOAKACIQNK23L',
          client_secret: 'J5AIPR0520VJDBPYB4HRL0ZW3F22PDQKUCPHBQI2JKN43MC3',
          near: params.location,
          // ll: lat + ',' + long,
          // ll: '40.7243,-74.0018',
          
          query: params.keywords,
          v: '20170801',
          limit: 5
            
        }
      }).then(function(result) {
        // console.log(result.response.groups[0].items);
        return result.response.groups[0].items;
      });

    }    
  }
  
});
