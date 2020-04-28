import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const AuthRoute = ({component: Component, autheticated, ...rest}) => (
    <Route
    {...rest}
    render={(props) => autheticated === true ? <Redirect to = '/'/> : <Component {...props}/>}/>
)   

export default AuthRoute;