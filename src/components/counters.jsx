import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onReduction,
      onAddCounter,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button onClick={onAddCounter} className="btn btn-secondary btn-sm m-2">
          New Counter
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onReduction={onReduction}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
