import React from 'react';
import {Route, Navigate, Outlet} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute =({element: Element, auth, ...rest}) => {
    
        const authCheck= auth.isAuthenticated;
        
        return authCheck ? <Outlet /> : <Navigate to="/login" />;

    
};

const mapStateToProps= state => ({
    auth: state.auth
});
export default connect(mapStateToProps) (PrivateRoute);