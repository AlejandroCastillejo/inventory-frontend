import React from 'react';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import './App.css';

import HomePage from './pages/homepage/homepage';
import AdminPage from './pages/adminpage/adminpage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Inventory</h1>
        </header>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/admin'>
            <AdminPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
