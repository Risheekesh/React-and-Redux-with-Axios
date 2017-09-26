import React from 'react';
import ReactDOM from 'react-dom';

class test extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loaderScreen:false
    }
  }
  render () {
    console.log("this.props.children",this.props)
    return (
      <div className="layout">
        <div>Header</div>
      	{this.props.children}
        <div>Footer</div>
      </div>
    );
  }
};



export default test;