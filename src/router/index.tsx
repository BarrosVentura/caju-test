import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { NewUserPage } from "~/pages/NewUser";
import { DashboardPage } from "~/pages/Dashboard";
import { routes } from "./routes";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { Loading } from "~/components/Loading";

const Router = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const isLoading = isFetching > 0 || isMutating > 0;

  return (
    <div style={{ marginTop: 64 }}>
      {isLoading && <Loading />}
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
