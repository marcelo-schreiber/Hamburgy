import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Landing from "./pages/Landing";
import BurgersMap from "./pages/BurgersMap";
import BurgerDetails from "./pages/BurgerDetails";
import Comments from "./pages/Comments";

const routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/burger-details/comments/:id">
          <Comments />
        </Route>
        <Route path="/map">
          <BurgersMap />
        </Route>
        <Route path="/burger-details/:id">
          <BurgerDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default routes;
