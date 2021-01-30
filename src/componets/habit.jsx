import React, { Component } from "react";
import "./habit.css";

class Habit extends Component {
  increment = () => {
    return this.props.handleIncrement(this.props.habit);
  };

  decrement = () => {
    console.log("decrement");
  };

  delete = () => {
    console.log("delete");
  };
  render() {
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit_name">{name}</span>
        <span className="habit_count">{count}</span>
        <button className="habit_btn habit_increase" onClick={this.increment}>
          <i className="fas fa-plus"></i>
        </button>
        <button className="habit_btn habit_decrease" onClick={this.decrement}>
          <i className="fas fa-minus"></i>
        </button>
        <button className="habit_btn habit_delete" onClick={this.delete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}
export default Habit;
