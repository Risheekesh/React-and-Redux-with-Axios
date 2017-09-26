import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as api from '../../api/index';

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
				Home Page
			{	this.props.productData.map(singleData=>{
				return(
					<div key={singleData}>{singleData}</div>
					)
				})
			}
			<Link to="/about">About</Link>
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