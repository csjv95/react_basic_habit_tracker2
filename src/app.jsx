import Nav from "./componets/nav/nav";
import Input from "./componets/input/input";
import Habits from "./componets/habits";
import Reset from "./componets/reset/reset";
import "./app.css";

import React, { Component } from "react";

class App extends Component {
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
    return (
      <main>
        <Nav count={this.state.habits.filter(item => item.count > 0).length}/>
        <Input />
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
        />
        <Reset />
      </main>
    );
  }
}

export default App;
