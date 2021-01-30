import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habit : [
        {id : 1, name : 'Jogging', count : 0 },
        {id : 2, name : 'cooking', count : 0 },
        {id : 3, name : 'studying', count : 0 }

      ]
    }
  }
  
  render() {
    const habit = this.state.habit;
    return (
      <ul>
        {habit.map(habit => <Habit key={habit.id} habit={habit}/>)}
      </ul>
    );
  }
}

export default Habits;
