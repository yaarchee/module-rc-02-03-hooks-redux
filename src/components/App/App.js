import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import CounterView from '../../Views/CounterView';
import { Route, Switch } from 'react-router-dom';
import routers from '../../routers';
import PhoneBookView from '../../Views/PhoneBookView';
import FeedBackView from '../../Views/FeedBackView';
import ImageFinderView from '../../Views/ImageFinderView';

export default class App extends Component {
  render() {
    return (
      <>
        <Navigation />

        <Switch>
          <Route path={routers.counter} component={CounterView} />
          <Route path={routers.phoneBook} component={PhoneBookView} />
          <Route path={routers.feedback} component={FeedBackView} />
          <Route path={routers.imageFinder} component={ImageFinderView} />
        </Switch>
      </>
    );
  }
}
