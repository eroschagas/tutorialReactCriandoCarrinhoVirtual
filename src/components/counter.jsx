import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="counter-container">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm btn-increment"
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.onReduction(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-2 btn-reduction"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger bt-sm"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
