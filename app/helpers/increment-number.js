import Ember from 'ember';

export function incrementNumber(params/*, hash*/) {
  let num = params[0];
  return num+1;
}

export default Ember.Helper.helper(incrementNumber);
