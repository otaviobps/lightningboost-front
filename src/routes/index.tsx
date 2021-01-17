import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Home } from "../pages/home";
import { Navigation } from "../components/Navigation";
import { Explorer } from "../pages/explorer";
import { WatchTower } from "../pages/watchtower";

const useStyles = makeStyles({
  body: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
});

export const Routes: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/explorer">
            <Explorer />
          </Route>
          <Route path="/watchtower">
            <WatchTower />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
