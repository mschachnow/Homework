import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    currentNumber: 0,
    total: 0
  }
  clickNum(numC) {
    this.setState({
      currentNumber: numC,
      //total: this.state.total + numC,
    })

  }
  createNumberButton(num) {
    return <button className="btn btn-secondary" onClick={() => this.clickNum(num)}>{num}</button>

  }

  createOperatorButton(operation) {
    return <button className="btn btn-danger" onClick={() => this.setState({ operator: operation })} > {operation} </ button>
  }
  render() {
    return (
      <div className="container-fluid" >
        <div className="text-center">
          {this.createNumberButton(1)}
          {this.createNumberButton(2)}
          {this.createNumberButton(3)}
          <br></br>
          {this.createNumberButton(4)}
          {this.createNumberButton(5)}
          {this.createNumberButton(6)}
          <br></br>
          {this.createNumberButton(7)}
          {this.createNumberButton(8)}
          {this.createNumberButton(9)}
          <br></br>
          {this.createOperatorButton('+')}
          {this.createOperatorButton('-')}
          {this.createOperatorButton('X')}
          {this.createOperatorButton('÷')}
          {this.createOperatorButton('=')}
        </div>
        <div className="text-center">{this.state.currentNumber}</div>
      </div>

    );
  }
}
export default App;
