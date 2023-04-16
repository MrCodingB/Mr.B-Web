import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import PageRoute from "./components/page-route/page-route";
import { routes } from "./routes";

export default function App() {
  return (
    <HashRouter>
      <Switch>
        {routes
          .filter((r) => !r.disabled)
          .map((r, i) => {
            return (
              <PageRoute
                key={i}
                exact
                path={"/" + r.path}
                title={r.title}
                component={r.component}
              />
            );
          })}

        <Route path="/">
          <Redirect to={"/" + routes[0].path} />
        </Route>
      </Switch>
    </HashRouter>
  );
}
