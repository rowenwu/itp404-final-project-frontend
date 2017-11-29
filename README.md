	1. Millennials
	2. On Yelp, you can only save places to your own account, but oftentimes, you want to share places with friends.  Sharing pages from yelp individually is tedious, and there's no easy way to aggregate the places you've shared, so it's easy to forget about them. Then, plans fall through, or when you actually start planning to go, you have to go back and look for the places again
	3. Client-side routes: search, saved, plans
	Use the Yelp API, and store a shared group's locations in the loopback API
	
GET /places
	$.ajax({
		type: ‘GET’,
		url: ‘/places’
	});
  response:
  { 
    places: [{
      id:
      name:
      rating:
      review_count:
      url:
      categories: 
      location.coordinate.latitude:
      location.coordinate.longitude:
      location.postal_code:
      likes:
      plan_date:
   }]
  }
	
POST /place
  $.ajax({
		type: ‘POST’,
		url: ‘/place’,
    data {
      id:
      name:
      rating:
      review_count:
      url:
      categories: 
      location.coordinate.latitude:
      location.coordinate.longitude:
      location.postal_code:
      likes:
      plan_date:
    }
	});
  response:
  {
  "data": {
    "type": "places",
    "id": ,
    "attributes": {
      id:
      name:
      rating:
      review_count:
      url:
      categories: 
      location.coordinate.latitude:
      location.coordinate.longitude:
      location.postal_code:
      likes:
      plan_date:
    }
  }
}
  
PATCH: /place/id
  $.ajax({
  		type: ‘PATCH’,
      url: ‘/place/id’,
      data {
        likes:
        plan_date:
      }
  });
  response:
  {
  "data": {
    "type": "places",
    "id": ,
    "attributes": {
      id:
      name:
      rating:
      review_count:
      url:
      categories: 
      location.coordinate.latitude:
      location.coordinate.longitude:
      location.postal_code:
      likes:
      plan_date:
    }
  }
}
      
DELETE: unsave a place
  $.ajax({
    type: ‘DELETE’,
    url: ‘/place/id’,
  });
  response: null
