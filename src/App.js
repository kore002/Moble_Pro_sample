import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sample from './pages/pageSample/SamplePage';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Sample} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
