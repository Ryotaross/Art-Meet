import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';


  function App() {
    return (
        <div>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/create20200625' exact component={New} />
              <Route exact path="/edit/:id" component={Edit} />
            </Switch>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))