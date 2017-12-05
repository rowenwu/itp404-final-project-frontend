import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
    plans: Ember.inject.service(),
    locations:[],
    actions: {
        selected(position, jQueryEvent) {
            let selectedPosition = this.get('selectedPosition');
            if(selectedPosition != -1){
                $(`[data-index=${selectedPosition}]`).removeClass('active'); 
            }
            $(`[data-index=${position}]`).addClass('active');     
            this.set('selectedPosition', position); 
        },
        addLocation(){
            let selectedPosition = this.get('selectedPosition');   
            let locations = this.get('locations');   
            let model = this.get('model');
            if(selectedPosition != -1){
                locations.push(model[selectedPosition]);
            }
        },
        savePlan(){
            let selectedPosition = this.get('selectedPosition');   
            let locations = this.get('locations');   
            let model = this.get('model');
            if(selectedPosition != -1){
                locations.push(model[selectedPosition]);
                this.get('plans').add(locations);
                this.transitionToRoute('saved');
                
            }   
            else{
                $('#error-message').html("You haven't selected a location");
            }      
        }
    }
});
