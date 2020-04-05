import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as plugins from './plugins';

console.log('plugins ==>', plugins);

const renderPlugins = () => {
  return (
    <Switch>
      <Route path={'/'} component={plugins.SamplePlugin} exact={true} />
    </Switch>
  );
};

const App: FC<{}> = () => {
  return <Router>{renderPlugins()}</Router>;
};

export default App;
