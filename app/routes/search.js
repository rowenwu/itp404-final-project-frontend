import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        searchKeywords: {
          refreshModel: true,
          as: 'keywords'
        }
      },
      model(params) {
        if(params.searchKeywords != null)
            return $.getJSON(`https://api-eventful.herokuapp.com/api/events?keywords=${params.searchKeywords}`);        
      }
});
