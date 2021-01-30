import React, { Component } from 'react';
import './habit.css';

class Habit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0
    }
  }
  
  increment = ()=> {
    const count = this.state.count + 1;
    this.setState({count});
  }
  
  decrement = ()=> {
    const count = this.state.count - 1;
    this.setState({count : count >= 0 ? count : 0});
    console.log({count});
  }

  delete = ()=> {
    console.log('delete');
  }
  
  render() {
    return (
      <li className='habit'>
        <span className='habit_name'>habit</span>
        <span className='habit_count'>{this.state.count}</span>
        <button className='habit_btn habit_increase' onClick={this.increment}>
          <i className="fas fa-plus"></i>
        </button>
        <button className='habit_btn habit_decrease' onClick={this.decrement}>
          <i className="fas fa-minus"></i>
        </button>
        <button className='habit_btn habit_delete' onClick={this.delete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}
export default Habit;