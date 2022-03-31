import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Results from './Results';

const Routes = () => {
  return (
    <div className="p-4 pt-0">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route path={['/search', '/images', '/news', '/videos']}>
          <Results />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
