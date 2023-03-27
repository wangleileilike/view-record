import React, { Component, useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Button, message } from  'antd';
import Debounce from 'lodash-decorators/debounce';
import bind from 'lodash-decorators/bind';


  
  export default function ParentCom() {
    const [count, setCount] = useState(0);
    function foo() {
      console.log('This is a function')
    }
    const fooC = useCallback(foo, []);
    return (
      <div>
        <h2 onClick={() => setCount(count+1)}>父组件</h2>
        <ChildCom foo={fooC} />
      </div>
    );
  }
  
  function ChildComFunc(props) {
    console.log('子组件执行', props);
    useEffect(() => {
      console.log('子组件useEffect执行')
    }, [])
    return (
      <div>
        我是子组件
      </div>
    );
  }

  const ChildCom = React.memo(ChildComFunc); // 使用React.memo作为高阶组件进行组件包装，返回一个新组件，如果传入ChildComFunc的参数没有变化的话，ChildComFunc组件不会更新

  // 2. 使用shouldComponentUpdate对子组件进行约束，如果props不改变，子组件不更新
  // class ChildCom extends React.Component {

  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (nextProps === this.props) {
  //       return false
  //     }
  //     return true
  //   }
    
  //   render() {
  //     console.log('子组件渲染');
  //     return (
  //       <div>class自组件</div>
  //     )
  //   }
  // }


  // 3. 使用PureComponent构建子组件，如果props不改变，子组件不更新
  // class ChildCom extends React.PureComponent {
    
  //   render() {
  //     console.log('子组件渲染');
  //     return (
  //       <div>class自组件</div>
  //     )
  //   }
  // }

