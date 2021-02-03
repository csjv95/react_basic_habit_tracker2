import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : ''
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.state.value;
    name &&  this.props.onAdd(name);
    this.setState({value : ''});  // input 초기화
  }

  onChange = (event) => {
    this.setState({value : event.target.value})
  }
  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.value} onChange={this.onChange}/>
        <button>Add</button>
      </form>
    );
  }
}

export default Input;
