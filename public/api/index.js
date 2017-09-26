import axios from 'axios';
import {getProductSuccess} from '../actions/product-actions';
import store from '../store';

export function getdata(){
	return axios.get("/getSimpleData").then(response=> {
		console.log("response==========",response.data)
		store.dispatch(getProductSuccess(response.data));
		return response;
	})
}
