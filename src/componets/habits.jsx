import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [
        { id: 1, name: "Jogging", count: 0 },
        { id: 2, name: "cooking", count: 0 },
        { id: 3, name: "studying", count: 0 },
      ],
    };
  }

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count + 1;
    habits[index].count = count;
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count > 0 ? count : 0;
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: habits });
  };

  render() {
    const habits = this.state.habits;
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
