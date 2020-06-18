import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

interface Value {
  id: number,
  name: string
}

class App extends Component {
  state = {
    values: []
  }

  async componentDidMount() {
    try {
      const values : Value[] = (await axios.get('http://localhost:5000/api/values')).data

      this.setState({
        values: values
      })
    } catch (e) {
      alert('Error')
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.values.map((value: Value) =>
              (
                <li key={value.id}>{value.name}</li>
              )
            )}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
