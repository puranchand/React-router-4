import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Implement React-router 4.</h1>
       <App />
       <Link to="/home"><button>Home</button></Link>
       <Link to="/profile"><button>Profile</button></Link>
       <Link to="/contact"><button>Contact</button></Link>
      </div>
    );
  }
}

export default App;
