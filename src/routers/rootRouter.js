import React from "react";
import Login from "../views/user/login";
import {ROUTER_NAME} from "./typeRouter";
import Home from "../views/home";
import { Route, Switch, Redirect } from "react-router-dom";
function RootRouter() {
  return (
    <Switch>
      <Redirect exact from="/" to={ROUTER_NAME.LOGIN_PAGE} />
      <Route path={ROUTER_NAME.LOGIN_PAGE} component={Login} exact />
      <Route path={ROUTER_NAME.HOME_PAGE} component={Home} exact />
    </Switch>
  );
}
export default RootRouter;
