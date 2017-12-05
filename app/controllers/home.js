import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        searchYelp(event) {
            event.preventDefault();
            let keywords = this.get('keywords');
            let location = this.get('location');
            if(location != null)
                this.transitionToRoute('search', { queryParams: { keywords, location}});
        }

        
    }
});
