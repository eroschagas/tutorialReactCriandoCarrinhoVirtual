import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [],
  };
  handleAddCounter = () => {
    if (!this.state.counters.length) {
      this.setState({
        counters: [{ id: 1, value: 0 }],
      });
    } else {
      var newId = this.state.counters.reduce(function (prev, current) {
        if (+current.id > +prev.id) {
          return current;
        } else {
          return prev;
        }
      });
      var newIdNum = newId.id;
      this.setState({
        counters: [...this.state.counters, ...[{ id: newIdNum + 1, value: 0 }]],
      });
    }
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReduction = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container main-container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onReduction={this.handleReduction}
            onDelete={this.handleDelete}
            onAddCounter={this.handleAddCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
