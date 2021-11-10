import React, { Component, Fragment} from "react";
import ReactDOM from "react-dom";

import Header from './layout/Header';
import Landing_page_accounts from "./content/Landing_page_accounts";
import Slideshows from "./content/Slideshows";

import {Provider} from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className= "container" >
                        <Landing_page_accounts />
                        <Slideshows/>
                    </div>
                </Fragment>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));