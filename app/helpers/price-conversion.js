import Ember from 'ember';

export function priceConversion(params/*, hash*/) {
  let currency = params[0];
  let tier = params[1];
  let price = "";
  for(var i = 0; i < tier; i++){
    price += currency;
  }
  return price;
}

export default Ember.Helper.helper(priceConversion);
