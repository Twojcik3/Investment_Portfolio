import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <Router>
      <AppProvider>
        <Route path="/" exact component={Home}></Route>
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </AppProvider>
    </Router>
  )
}

export default App;
