import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    currentNumber: 0,
    total: 0
  }
  clickNum(numC) {

    this.setState({
      currentNumber: this.state.currentNumber !== '0' ? this.state.currentNumber + numC : numC.toString(),
      //total: this.state.total + numC,
    })
    if (this.state.total === 0) {
      this.setState({ total: this.state.total + numC });
    }
    console.log(this.state.total);


  }
  createNumberButton(num) {
    return <button onClick={() => this.clickNum(num)}>{num}</button>

  }

  createOperatorButton(operation) {

    return <button onClick={() => this.setState({ operator: operation })} > {operation} </ button>

  }
  equals() {

    console.log(this.state.operator);
    switch (this.state.operator) {
      case '+':
        this.setState({ total: this.state.total + this.state.currentNumber });
        break;
      case '-':
        this.setState({ total: this.state.total - this.state.currentNumber });
        break;
      case 'x':
        this.setState({ total: this.state.total * this.state.currentNumber });
        break;
      case '÷':
        this.setState({ total: this.state.total / this.state.currentNumber });
        break;
      default:
        this.setState({ total: this.state.total });
    }

    /*if (operator === '+') {
      total += currentNumber;
      console.log(total);
      return total;
    } else if (operator === '-') {
      return total = total - currentNumber;
    } else if (operator === 'x') {
      return total = total * currentNumber;
    } else if (operator === '÷') {
      return total = total / currentNumber;
    } else {
      console.log(total);
      return total
    }*/

  }
  render() {
    return (
      <div className="calculator" >

        <input value={this.state.total} />
        {this.createNumberButton(1)}
        {this.createNumberButton(2)}
        {this.createNumberButton(3)}
        {this.createNumberButton(4)}
        {this.createNumberButton(5)}
        {this.createNumberButton(6)}
        {this.createNumberButton(7)}
        {this.createNumberButton(8)}
        {this.createNumberButton(9)}
        {this.createOperatorButton('+')}
        {this.createNumberButton(0)}
        {this.createOperatorButton('-')}
        {this.createOperatorButton('x')}
        {this.createOperatorButton('÷')}
        <button onClick={() => this.equals()}>=</ button>

        <div >{this.state.total}</div>
        <div >{this.state.operator}</div>
        <div >{this.state.currentNumber}</div>
        <div >{this.state.total}</div>
      </div>

    );
  }
}
export default App;
