import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphnagesMap from './pages/OrphnagesMap';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphnagesMap} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;