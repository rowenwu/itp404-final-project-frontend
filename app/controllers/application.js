import Ember from 'ember';

export default Ember.Controller.extend({
    dateChosen: null,
    actions: {
        searchYelp(event) {
            event.preventDefault();
            let keywords = this.get('keywords');
            let location = this.get('location');
            let date = this.get('date');
            if(location != null)
                this.transitionToRoute('search', { queryParams: { keywords, location, dateChosen}});
        },
        changeDateAction(date) {
            this.set('dateChosen', date);
        },
        clearDateAction() {
            this.set('dateChosen', null);
        }
        
    }
});
