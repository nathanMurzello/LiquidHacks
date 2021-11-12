import React, { Component, Fragment} from "react";
import ReactDOM from "react-dom";

import SlideshowForm from "../content/SlideshowForm";
import Carousel from 'react-bootstrap/Carousel';
import {Provider} from 'react-redux';
import store from '../../store';

export class SlideEditor extends Component {
    render() {
        const rectangle= {
            width:900,
            height:500,
            background: '#404040'
        };
        const bulletContent={
            color: 'white'
        };
        const inputForm={
            paddingTop: 20,
            paddingBottom: 20,
        }
        return (
            <Provider store={store}>
                <Fragment>
                    <div class="container-sm">
                        <SlideshowForm/>
                    </div>
                    <div class="d-flex justify-content-center">
                        <Carousel style={inputForm}>
                            <Carousel.Item>
                                <div style={rectangle}>
                                    <form style={bulletContent}>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Title</label>
                                            <input class="form-control form-control-lg" type="text" placeholder=""/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">1st Bullet</label>
                                            <input class="form-control" type="text" placeholder="Default input"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">2nd Bullet</label>
                                            <input class="form-control" type="text" placeholder="Default input"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">3rd Bullet</label>
                                            <input class="form-control" type="text" placeholder="Default input"/>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </form>
                                </div>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div style={rectangle}>
                                <form style={bulletContent}>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Title</label>
                                            <input class="form-control form-control-lg" type="text" placeholder=""/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">1st Bullet</label>
                                            <input class="form-control" type="text" placeholder="Default input"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">2nd Bullet</label>
                                            <input class="form-control" type="text" placeholder="Default input"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">3rd Bullet</label>
                                            <input class="form-control" type="text" placeholder="Default input"/>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </form>
                                </div>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div style={rectangle}>
                                <form style={bulletContent}>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Title</label>
                                            <input class="form-control form-control-lg" type="text" placeholder=""/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">1st Bullet</label>
                                            <input class="form-control" type="text" placeholder="Default input"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">2nd Bullet</label>
                                            <input class="form-control" type="text" placeholder="Default input"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">3rd Bullet</label>
                                            <input class="form-control" type="text" placeholder="Default input"/>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </form>
                                </div>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>


                </Fragment>
            </Provider>
        )
    }
}

export default SlideEditor;


