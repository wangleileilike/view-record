import React, { Component } from 'react';

const simpleHoc = WrappedComponent => {
  console.log('这是simpleHoc组件');
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}
export default simpleHoc;