import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters : []
      
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => this.setState({monsters: data}))
      .catch((err) => console.log('err'))
  }

    render() {


    return(
      <div className='App'>
        <input
        type="text"
        placeholder='search here'
        onChange={() => {}}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id  }>
              <h1>{monster.name}</h1>
              <h1>{monster.email}</h1>
            </div>
            )
        })}
      </div>
    )
  }
}

export default App;
