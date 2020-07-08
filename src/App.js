import React, { Component } from 'react';
import './App.css';
import ItemsList from './ItemsList';
class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      item: {
        text: '',
        key: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const item = { text: '', key: '' };
    item.text = e.target.value;
    item.key = new Date();
    this.setState({ item: item });
  }
  handleSubmit(e) {
    e.preventDefault();
    const item = this.state.item;
    const items = [...this.state.items, item];
    this.setState({ items: items });
    e.target.value = '';
  }

  render() {
    return (
      <div className="App">
        <form id="to-do-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Enter Todo ..."
          />
          <button>Add Todo</button>
        </form>
        <ItemsList items={this.state.items} />
      </div>
    );
  }
}

export default TodoForm;
