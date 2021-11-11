import React, { Component, Fragment} from "react";
import ReactDOM from "react-dom";
import {} from "react-router-dom";

import Slideshows from "./content/Slideshows";
import Teacher_Home from "./pages/Teacher_Home";
import Header from './layout/Header';
import Landing_page_accounts from "./content/Landing_page_accounts";
import SlideEditor from "./pages/SlideEditor";

import Login from './accounts/Login';
import Register from './accounts/Register';

import PrivateRoute from "./common/PrivateRoute";

import { HashRouter as Router, Route, Routes, Redirect } from 'react-router-dom';


import {Provider} from 'react-redux';
import store from '../store';
import { loadUser }from '../actions/auth';

class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser());
    }

    render() {
        return(
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <Routes>
                            <Route exact path="/" exact element={<Landing_page_accounts />}/>
                            <Route exact path="/TeacherHome" element={<PrivateRoute/>} >
                                <Route exact path="/TeacherHome" element={<Teacher_Home/>}/>
                            </Route>
                            <Route exact path="/SlideEditor" element={<PrivateRoute/>} >
                                <Route exact path="/SlideEditor" element={<SlideEditor/>}/>
                            </Route>
                            <Route exact path="/StudentHome" element={<PrivateRoute/>} >
                                <Route exact path="/StudentHome" element={<Teacher_Home/>}/>
                            </Route>
                            <Route exact path="/register" exact element={<Register/>} />
                            <Route exact path="/login" exact element={<Login/>} />
                        </Routes>
                    </Fragment>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));