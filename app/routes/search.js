import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  // ajax: Ember.inject.service(),  
  
  queryParams: {
    keywords: {
      refreshModel: true,
    },
    location: {
      refreshModel: true,
    }
  },
  model(params) {
    if(params.location != null){

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
        console.log(result.response.groups[0].items);
        return result.response.groups[0].items;
      });

     }    
  }
});
