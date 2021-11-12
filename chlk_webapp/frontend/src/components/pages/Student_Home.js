import React, { Component, Fragment} from "react";
import ReactDOM from "react-dom";
import {Link } from "react-router-dom";

import {Provider} from 'react-redux';
import store from '../../store';
import JoinRoom from "../content/JoinRoom";

import PropTypes from 'prop-types';

export class Student_Home extends Component {
    
    render() {
        return (
            
            <Provider store={store}>
                <Fragment>
                    <h1>Student Home</h1>
                    <div class="container">
                        <JoinRoom/>
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

export default Student_Home;