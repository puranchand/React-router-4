import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Contact from './components/Contact';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
, document.getElementById('root'));
registerServiceWorker();
