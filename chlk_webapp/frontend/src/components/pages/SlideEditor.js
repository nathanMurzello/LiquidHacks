import React, { Component, Fragment} from "react";
import ReactDOM from "react-dom";

import {Provider} from 'react-redux';
import store from '../../store';

export class SlideEditor extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <h1> TESTING Slide Editor</h1>
                    
                </Fragment>
            </Provider>
        )
    }
}

export default SlideEditor;