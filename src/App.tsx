import React, { ComponentType, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createLazyRoute } from './common/Utils';
import NavBar from './components/NavBar';
import LoginScreen from './layouts/login';

const Home = createLazyRoute(lazy(() => import('./layouts/home')));
const routes: Array<{
  path: string;
  component: ComponentType<any>;
  exact?: boolean;
}> = [
  { path: '/', component: Home, exact: true },
  { path: '/login', component: LoginScreen },
];

function App() {
  return (
    <Router>
      <AuthEnabledNavbar />
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact || false}
          />
        ))}
      </Switch>
    </Router>
  );
}

const AuthEnabledNavbar = () => {
  const isLoggedIn = false;
  if (isLoggedIn) {
    return <NavBar />;
  }
  return <NavBar />;
};

export default App;
