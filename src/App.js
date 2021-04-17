import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/LogIn/LogIn/Login';
import Navbar from './components/Shared/Navbar/Navbar';
import { createContext, useState } from 'react';
import Book from './components/Dashboard/UserDashboard/Book/Book';

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    img: '',
    error: ''
  })
  return (
    <UserContext.Provider value={[user, setUser]}>
      <h2>{user.email}</h2>
      <Router>
          <Switch>
            {/* <Route path="/dashboard/book/:id">
              <Book/>
            </Route> */}
            <Route path="/dashboard">
              <Navbar/>
              <Dashboard/>
            </Route>
            <Route path="/login">
              <Navbar/>
              <Login/>
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
