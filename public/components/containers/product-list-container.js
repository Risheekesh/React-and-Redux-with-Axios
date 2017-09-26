import React from 'react';
import {connect} from 'react-redux';
import * as api from '../../api/index';

console.log(api)
class ProductListContainer extends React.Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){
		api.getdata();
	}
	render(){
		return(
			<div className="children">
				this is children{this.props.productData}
			</div>
		)
	}
}


function mapStateToProps(store) {
	return{
		productData:store.productState.productSatate	
	}
}

export default connect(mapStateToProps)(ProductListContainer);	