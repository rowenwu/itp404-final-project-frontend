import Ember from 'ember';

export default Ember.Controller.extend({
  markers: null,
  
  init() {
    // let model = this.get('model');
    // this.set('markers', [
    //   {
    //     id: 'unique-marker-id',  // Recommended
    //     lat: model[0].venue.location.lat, // Required
    //     lat: model[0].venue.location.lat,     //Required
    //     infoWindow: {
    //       content: '<p>model[0].venue.name</p>',
    //       visible: true
    //     },
    //     click(event, marker) {},
    //     rightclick(event, marker) {},
    //     dblclick(event, marker) {},
    //     mouseover(event, marker) {},
    //     mouseout(event, marker) {},
    //     mouseup(event, marker) {},
    //     mousedown(event, marker) {},
    //     drag(e, marker) {},
    //     dragstart(e, marker) {},
    //     dragend(e, marker) {}
    //   }
    // ]);
  }
});
