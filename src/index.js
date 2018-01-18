import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components/native';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Header from './Header';
import HomePage from './HomePage';
import WTHSC from './WTHSC';
import First from './Examples/First';
import Second from './Examples/Second';
import Third from './Examples/Third';
import Fourth from './Examples/Fourth';

const PrimaryLayoutView = styled.View`
`;

const PageView = styled.View`
`;

const PrimaryLayout = () => (
  <PrimaryLayoutView>
    <Header />
    <PageView>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
        <Route path="/fourth" component={Fourth} />
        <Route path="/whatthehellissc" component={WTHSC} />
      </Switch>
    </PageView>
  </PrimaryLayoutView>
);

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
