import React from 'react';
import { Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import LoginPane from './Login/LoginPane';
import {ApplicationPane} from './Apply/ApplicationPane';
import {LandingPage} from './LandingPage/LandingPage';
import {TrackingPane} from './Tracking/TrackingPane';
import {PageRoutes} from './Constants/constants';
function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={store.history}>
        <Route exact path={PageRoutes.login}>
          <LoginPane/>
        </Route>
        <Route exact path={PageRoutes.Home}>
          <LandingPage/>
        </Route>
        <Route exact path={PageRoutes.Apply}>
          <ApplicationPane/>
        </Route>
        <Route exact path={PageRoutes.Track}>
          <TrackingPane/>
        </Route>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;

