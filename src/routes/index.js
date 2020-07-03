import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Camunda from '../pages/Camunda';
import Default from '../pages/Default';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Camunda} />
      <Route path="/:username" component={Default} />
    </Switch>
  );
}
