import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import '../App.css';

//NavLink helps getting active page property,
// we can add active page css to the active link
 
const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/Icons')
    //   }, 2000);
    // before adding withRouter it wouldn't hv worked...

  return (
    <nav className="nav-wrapper red darken-3">
    <div className="conatiner">
      <span>Project World</span>
      <ul className="right">
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/Icons'>Icons</NavLink>
        </li>
        <li>
            <NavLink to='/Toastify'>Toastify</NavLink>
        </li>
        <li>
            <NavLink to='/Modals'>Modal</NavLink>
        </li>
        <li>
            <NavLink to='/ToolTip'>Tool Tip</NavLink>
        </li>
        <li>
            <Link to='/CountUp'>Count Up</Link>
        </li>
        <li>
            <Link to='/IdleTimer'>Idle Timer</Link>
        </li>
        <li>
            <Link to='/ColorPicker'>Color Picker</Link>
        </li>
        <li>
            <Link to='/CreditCard'>Credit Card</Link>
        </li>
        <li>
            <Link to='/DatePickerd'>Date Picker</Link>
        </li>
        <li>
            <Link to='/AgeCal'>Age Calculate</Link>
        </li>
        <li>
            <Link to='/MultipleRedux'>Multiple Redux</Link>
        </li>
        <li>
            <Link to='/Hoc'>Hoc Redux</Link>
        </li>
        <li>
            <Link to='/SagaProp'>Saga Redux</Link>
        </li>
        <li>
            <Link to='/Hooks'>Hooks</Link>
        </li>
        <li>
            <Link to='/HooksUseEffect'>Hooks Use-Effect</Link>
        </li>
      </ul>
    </div>
    </nav>
  )
}

export default withRouter(Navbar)
