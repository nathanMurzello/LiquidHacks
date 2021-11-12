import React, { Component, Fragment} from "react";
import ReactDOM from "react-dom";
import {Link } from "react-router-dom";

import Header from '../layout/Header';
import Slideshows from "../content/Slideshows";

import {Provider} from 'react-redux';
import store from '../../store';

export class Teacher_Home extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <div class="container">
                        <div class="row">
                            <div class="col-8">
                                <Slideshows/>
                            </div>
                            <div class="col">
                                <Link to='/SlideEditor'>
                                    <button type="button" className="btn btn-primary"> Create Slideshow</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

export default Teacher_Home