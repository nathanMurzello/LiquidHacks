import React, { Component, Fragment} from "react";
import ReactDOM from "react-dom";

import SlideshowForm from "../content/SlideshowForm";

import {Provider} from 'react-redux';
import store from '../../store';

export class SlideEditor extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <div class="container-sm">
                        <SlideshowForm/>
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

export default SlideEditor;


