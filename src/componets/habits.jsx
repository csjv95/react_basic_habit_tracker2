import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {

  handleIncrement = (habit) => {
    return this.props.handleIncrement(habit);
  };

  handleDecrement = (habit) => {
    return this.props.handleDecrement(habit)
  };

  handleDelete = (habit) => {
   return this.props.handleDelete(habit);
  };

  render() {
    const habits = this.props.habits;
    return (
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
