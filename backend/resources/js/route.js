import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import Example from './pages/Example';
import Home from './pages/Home';
import Sub from './pages/Sub';
import Away from './pages/Away';
import NewMeat from './pages/NewMeat';

  function App() {
    return (
        <div>
            <Switch>
              <Route path='/example' exact component={Example} />
              <Route path='/away' exact component={Away} />
              <Route path='/' exact component={Home} />
              <Route path='/create' exact component={NewMeat} />
            </Switch>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))