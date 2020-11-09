import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import AdminPage from "./pages/adminpage/adminpage";

import { ProductPage } from "./pages/product";

import {MenuContextProvider} from './context/menu-context';


function App() {

  return (
    <MenuContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products/:id" component={ProductPage} />
            <Route exact path="/admin" component={AdminPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </MenuContextProvider>
  );
}

export default App;
