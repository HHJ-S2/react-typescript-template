import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Spinner from 'components/Spinner'

const MainPage = lazy(() => import('pages/MainPage'));

const Routes = () => {
	return (
		<Router>
      <Suspense
        fallback={<Spinner />}
      >
        <Switch>
          <Route
            exact
            path="/"
            component={MainPage}
          />
        </Switch>
      </Suspense>
		</Router>
	);
};

export default Routes;