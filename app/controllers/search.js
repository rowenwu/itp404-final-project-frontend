import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        searchYelp(event) {
          event.preventDefault();
          let keywords = this.get('keywords');
          console.log(keywords);
          this.transitionToRoute({ queryParams: { searchKeywords: keywords }});
        }
      }
});
