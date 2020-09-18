import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import AdminPage from './pages/adminpage/adminpage';

function App() {

  // const [showAddItem, setShowAddItem] = useState(false);
  // const switchShowAddItem = () => setShowAddItem(!showAddItem);

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        {/* {showAddItem && <AddItem />} */}

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
