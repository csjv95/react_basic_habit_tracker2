import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : ''
    }
  }

  onChange = (event) => {
    this.setState({value : event.target.value})
  }
  
  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.onChange}/>
      </form>
    );
  }
}

export default Input;
