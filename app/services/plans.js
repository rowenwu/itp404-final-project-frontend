import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({
    add(locations){
        var d = new Date();
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/plans',
            data: {
                locations: locations,
                date: d
            }
        });
    },
    get(){
        return $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/api/plans'
        });
    },
    remove(id){
        return $.ajax({
            type: 'DELETE',
            url: `http://localhost:3000/api/${id}`
        });
    }
});
