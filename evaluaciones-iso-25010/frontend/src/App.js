// /src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './frontend/src/components/Login';
import Register from './frontend/src/components/Register';
import SoftwareForm from './frontend/src/components/SoftwareForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/software" component={SoftwareForm} />
        {/* Agregar más rutas según sea necesario */}
      </Switch>
    </Router>
  );
}

export default App;
