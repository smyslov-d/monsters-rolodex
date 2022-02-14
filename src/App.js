import './App.css';
import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component'; 
import { SearchBox } from './components/search-box/search-box.component'
class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }
  
  render() {
  return (
    <div className="App">
      <SearchBox 
        placeholder='search mosters'
        handleChange={e =>this.setState({searchField: e.target.value})}>
      </SearchBox>
      <CardList monsters={this.state.monsters}>
       
      </CardList>
    </div>
  );
}
}

export default App;
