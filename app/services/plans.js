import Ember from 'ember';
import $ from 'jquery';
import config from 'itp404-final-project-frontend/config/environment';

export default Ember.Service.extend({
    notifications: Ember.inject.service(),
    
    add(locations){
        var d = new Date();
        $.ajax({
            type: 'POST',
            url: config.apiHost + '/plans',
            data: {
                locations: locations,
                date: d
            }
        }).then(() => {
            this.get('notifications').success('Saved successfully!');
          })
          .catch(() => {
            this.get('notifications').error('There was an error!');
          });
    },
    get(){
        return $.ajax({
            type: 'GET',
            url: config.apiHost + '/plans'
        });
    },
    remove(id){
        return $.ajax({
            type: 'DELETE',
            url: config.apiHost + '/plans/' + id
        }).then(() => {
            this.get('notifications').success('Deleted successfully!');
          })
          .catch(() => {
            this.get('notifications').error('There was an error!');
          });
    }
});
