import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits : [
        {id : 1, name : 'Jogging', count : 0 },
        {id : 2, name : 'cooking', count : 0 },
        {id : 3, name : 'studying', count : 0 }

      ]
    }
  }

  handleIncrement= (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habit : habit})
  }

  handleDecrement = () => {

  }

  handleDelete = () => {

  }
  
  render() {
    const habits = this.state.habits;
    return (
      <ul>
        {habits.map(habit => <Habit 
                              key={habit.id}
                              habit={habit}
                              handleIncrement={this.handleIncrement}
                              handleDecrement={this.handleDecrement}
                              handleDelete={this.handleDelete}
                            />)}
      </ul>
    );
  }
}

export default Habits;
