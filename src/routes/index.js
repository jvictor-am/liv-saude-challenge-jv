import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Default from '../pages/Default';

export default function Routes() {
  return (
    <Switch>
      <Route path="/:username" component={Default} />
    </Switch>
  );
}
