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

  function App() {
    return (
        <div>
            <Switch>
              <Route path='/example' exact component={Example} />
              <Route path='/away' exact component={Away} />
              <Route path='/' exact component={Home} />
              <Route path='/detail' exact component={Sub} />
            </Switch>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))