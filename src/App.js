import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import '../src/App.css';

import HomePage from './component/HomePage';
import Navbar from './component/navbar';
import Icons from './component/1_Icons';
import Toastify from './component/2_Toastify';
import Modals from './component/3_Modal';
import ToolTip from './component/4_ToolTip';
import CountingUp from './component/5_CountUp';
import IdleTimerContainer from './component/6_IdleTimerContainer';
import ColorPicker from './component/7_ColorPicker';
import CreditCards from './component/8_CreditCards';
import DatePickerd from './component/9_DatePicker';
import Post from './component/10_Post';
import AgeCal from './component/12_AgeCal';
import MultipleRedux from './component/13_MultipleRedux';
import SagaProp from './component/15_SagaProp.js';
import Hoc from './component/hocs/Hoc';
import HooksExample from './component/16_hooks';
import HooksUseEffect from './component/17_HooksUseEffect';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar /><br/>
      {/* Navbar doesn't comes under router, but hv to apply some effects wrt props, we want to get the props value for that we will add higher order componnent, "withRouter" */}
      <Switch>
        <Route exact path ='/' component={HomePage} />
        <Route path ='/Icons' component={Icons} />
        <Route path ='/Toastify' component={Toastify} />
        <Route path ='/Modals' component={Modals} />
        <Route path ='/ToolTip' component={ToolTip} />
        <Route path ='/CountUp' component={CountingUp} />
        <Route path ='/IdleTimer' component={IdleTimerContainer} />
        <Route path ='/ColorPicker' component={ColorPicker} />
        <Route path ='/CreditCard' component={CreditCards} />
        <Route path ='/DatePickerd' component={DatePickerd} />
        <Route path ='/AgeCal' component={AgeCal} />
        <Route path ='/MultipleRedux' component={MultipleRedux} />
        <Route path ='/Hoc' component={Hoc} />
        <Route path ='/SagaProp' component={SagaProp} />
        <Route path ='/Hooks' component={HooksExample} />
        <Route path ='/HooksUseEffect' component={HooksUseEffect} />
        <Route path ='/:postId' component={Post} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
