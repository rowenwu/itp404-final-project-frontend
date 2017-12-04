import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
    actions: {
        selected(position, jQueryEvent) {
            let selectedPosition = this.get('selectedPosition');
            if(selectedPosition != -1){
                $(`[data-index=${selectedPosition}]`).removeClass('active'); 
            }
            $(`[data-index=${position}]`).addClass('active');             
            this.set('selectedPosition', position);;  
        }
    }
});
