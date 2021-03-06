import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Matches from './containers/Matches/Matches';
import Match from './containers/Matches/Match/Match';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/matches" exact component={Matches} />
        <Route path="/matches/:id" exact component={Match} />
      </Switch>
    );

    return (
      <div style={{overflowX: 'hidden'}}>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
