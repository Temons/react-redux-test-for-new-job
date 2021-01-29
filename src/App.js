import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ItemList from "./components/itemList";
import "./app.scss";
import ItemPage from "./components/itemPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/items/:id" component={ItemPage} />
          <Route path="*" component={ItemList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
