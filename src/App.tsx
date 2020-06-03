import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ListView from './components/ListView/ListView';
import DetailView from './components/DetailView/DetailView';
import Cart from './components/Cart/Cart';
import MyOrders from './components/MyOrders/MyOrders';
import ErrorBoundary from './application/ErrorBoundary';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store/store';

type Props = {};

const App: React.FC<Props> = () => {
  const { store, persistor } = configureStore();
  return (
    <Fragment>
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <header className="header-container">
                <NavBar />
              </header>
              <main className="main">
                <Switch>
                  <Route exact path="/" component={ListView}></Route>
                  <Route exact path="/details/:book_id" component={DetailView}></Route>
                  <Route exact path="/orders" component={MyOrders}></Route>
                  <Route exact path="/cart" component={Cart}></Route>
                </Switch>
              </main>
            </Router>
          </PersistGate>
        </Provider >
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;
