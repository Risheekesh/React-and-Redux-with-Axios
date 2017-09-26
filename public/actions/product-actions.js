import * as types from '../actions/action-types';

export function getProductSuccess(data) {
	console.log("product-action", data);
  return {
    type: types.GET_ABC,
    data
  };
}