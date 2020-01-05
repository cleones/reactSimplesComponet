import React  from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import routersConfig from './routersConfig';
const App = () => {
   return (
     <div>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
        </div>
      {
        routersConfig.map((route, key)=> {
          return <Route 
            key={key}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        })
    }
    </div>
  );
}

export default App;
