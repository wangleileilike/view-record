import React from 'react';
import { Route } from 'react-router-dom';
import Usual from './components/simple/usual';
import Usual1 from './components/inheritance/usual';
import Login from './components/form/login';
import FuncContainer from './components/container/container-add-func';
import WrappedUsual from './components/container/hoc-usual';
import Myself from './components/Myself/Myself';
import UseMemo from './components/Myself/UseMemo';

const Routes = () => (
  <div>
    <Route exact path="/" render={() => <div>Welcome to</div>} />
    <Route path="/usual" component={Usual} />
    <Route path="/container" component={FuncContainer} />
    <Route path="/form" component={Login} />
    <Route path="/inheritance" component={Usual1} />
    <Route path="/hoc-usual" component={WrappedUsual} />
    <Route path="/myself" component={Myself} />
    <Route path="/useMemo" component={UseMemo} />
  </div>
  );
export default Routes;
