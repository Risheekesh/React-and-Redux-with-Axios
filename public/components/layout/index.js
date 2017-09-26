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
    return (
      <div className="layout">
      	{this.props.children}
      </div>
    );
  }
};



export default test;