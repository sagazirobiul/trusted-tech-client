import { createContext, useState, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import { getDecodedUser } from "./components/LogIn/LogIn/LoginManager";
import Preloader from './components/Shared/Preloader/Preloader';
const NoMatch = lazy(() => import('./components/NoMatch'));
const Home = lazy(() => import('./components/Home/Home/Home'));
const LoginModal = lazy(() => import('./components/LogIn/LogIn/LoginModal'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard/Dashboard'));


export const UserContext = createContext();
const App = () => {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(getDecodedUser());
  const [selectedService, setSelectedService] = useState({})

  return (
    <UserContext.Provider value={{user, setUser, admin, setAdmin, selectedService, setSelectedService}}>
      <Router>
          <Toaster/>
          <Suspense fallback={<Preloader/>}>
            <Switch>
              <PrivateRoute path="/dashboard">
                <Dashboard/>
              </PrivateRoute>
              <Route path="/login">
                <LoginModal/>
              </Route>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path='*'>
                <NoMatch/>
              </Route>
            </Switch>
          </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
