import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import Form from './components/LogIn/LogIn/Form';
import { Toaster } from 'react-hot-toast';
import { getDecodedUser } from "./components/LogIn/LogIn/LoginManager";

export const UserContext = createContext();
function App() {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(getDecodedUser());
  console.log(user);
  return (
    <UserContext.Provider value={{user, setUser, admin, setAdmin}}>
      <Router>
          <Toaster/>
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard/>
            </PrivateRoute>
            <Route path="/login">
              <Form/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
