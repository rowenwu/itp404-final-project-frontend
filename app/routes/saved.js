import Ember from 'ember';

export default Ember.Route.extend({
    title: 'Saved Plans',
    plans: Ember.inject.service(),
    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('selectedPosition', -1);
        controller.setProperties({ 
          // selectedPosition: -1,
          model: model,
          lat: model[0].locations[0].venue.location.lat,
          lng: model[0].locations[0].venue.location.lng,
          zoom: 11,
        });
      },
    model(params){
        return this.get('plans').get()
        .then(function(result) {
            // console.log(result);
            return result;
          });   
    }
    
});
