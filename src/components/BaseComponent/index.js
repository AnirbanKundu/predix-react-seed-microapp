import React from 'react';

export default class BaseComponent extends React.Component {
	constructor(props){
		super(props);
    this.displayName = 'BaseComponent';
	}	
	componentWillMount(){
		console.log('componentWillMount', this);
	}
	componentDidMount(){
		console.log('componentDidMount', this);
	}
	componentWillUnmount(){
		console.log('componentWillUnmount', this);
	}
  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate', prevProps, prevState);
  }
  
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps', nextProps);
  }
	render(){
	   const { children } = this.props;
	   return (<div>BaseComponent</div>);
	}
}
