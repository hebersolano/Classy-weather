import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.handleCount = this.handleCount.bind(this);
  }

  handleCount(e) {
    console.log(e.target.textContent);
    const sym = e.target.textContent;
    this.setState((oldState) => {
      if (sym == "-") return { count: --oldState.count };
      if (sym == "+") return { count: ++oldState.count };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleCount} name="-">
          -
        </button>
        {this.state.count}
        <button onClick={this.handleCount}>+</button>
      </div>
    );
  }
}

export default Counter;
