import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
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
      const values: Value[] = (await axios.get('http://localhost:5000/api/values')).data

      this.setState({
        values: values
      })
    } catch (e) {
      alert('Error')
    }
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value: Value) =>(
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
