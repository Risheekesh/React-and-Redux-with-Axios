 import * as types from '../actions/action-types';

 const initialState={
 	productSatate:[]
 };

 const productReducer=(state=initialState,action)=>{
 	switch(action.type){
 		case types.GET_ABC:
 			return Object.assign({},state,{productSatate:action.data});
 	}
 	return state;
 }

 export default productReducer;