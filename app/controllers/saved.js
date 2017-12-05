import Ember from 'ember';

export default Ember.Controller.extend({
    selectedPosition: null,
    plans: Ember.inject.service(),
    
    actions: {
        selected(position, jQueryEvent) {
            let selectedPosition = this.get('selectedPosition');
            if(selectedPosition != -1){
                $(`[data-index=${selectedPosition}]`).removeClass('active'); 
            }
            $(`[data-index=${position}]`).addClass('active');     
            this.set('selectedPosition', position); 
        },
        delete(jQueryEvent){
            let selectedPosition = this.get('selectedPosition');
            if(selectedPosition != -1){
                let model = this.get('model');
                this.get('plans').remove(model[selectedPosition].id);
                window.location.reload(true);
                
            }
            else{
                $('#error-message').html("You haven't selected a location");
                
            }

        }
    }
});
