import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { NewUserPage } from "~/pages/NewUser";
import { DashboardPage } from "~/pages/Dashboard";
import { routes } from "./routes";

const Router = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <HashRouter>
        <Switch>
          <Route path={routes.dashboard} component={DashboardPage} />
          <Route exact path={routes.newUser} component={NewUserPage} />
          <Route
            exact
            path={routes.history}
            component={() => <div>History</div>}
          />

          <Route exact path="*">
            <Redirect to={routes.dashboard} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Router;
