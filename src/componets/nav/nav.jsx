import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className='main_nav'>
        <i className="fas fa-clipboard-check logo"></i>
        <h1 className='nav_title'>Habit Tracker</h1>
        <span className='nav_count'>0</span>
      </nav>
    );
  }
}

export default Nav;