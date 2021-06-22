import React, { useContext, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useContext(UserContext)
    const email = localStorage.getItem('email')
    return (
        <Route
        {...rest}
        render={({ location }) =>
            user.email || email ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;