import React, { Component, Fragment} from "react";
import ReactDOM from "react-dom";
import {Link } from "react-router-dom";

import Carousel from 'react-bootstrap/Carousel';

import {Provider} from 'react-redux';
import store from '../../store';

export class PresentingRoom extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            currentSlide: 12
        };
    };
    render() {
        const rectangle= {
            width:900,
            height:500,
            background: '#404040'
        };
        const titleContent={
            color: 'white',
            textAlign: 'center',
            paddingBottom: 20
        }
        const bulletContent={
            color: 'white',
            textAlign: 'left',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 20
        }
        return (
            <Provider store={store}>
                <Fragment>
                    <h1> TESTING PresentingRoom</h1>
                    <div class="d-flex justify-content-center">
                        <Carousel fade>
                            <Carousel.Item>
                                <div style={rectangle}>
                                    <h1 style={titleContent}>TITLE3</h1>
                                    <h2 style={bulletContent}>* BULLET 1</h2>
                                    <h2 style={bulletContent}>* BULLET 2</h2>
                                    <h2 style={bulletContent}>* BULLET 3</h2>
                                </div>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div style={rectangle}>
                                    <h1 style={titleContent}>TITLE3</h1>
                                    <h2 style={bulletContent}>* BULLET 1</h2>
                                    <h2 style={bulletContent}>* BULLET 2</h2>
                                    <h2 style={bulletContent}>* BULLET 3</h2>
                                </div>

                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div style={rectangle}>
                                    <h1 style={titleContent}>TITLE3</h1>
                                    <h2 style={bulletContent}>* BULLET 1</h2>
                                    <h2 style={bulletContent}>* BULLET 2</h2>
                                    <h2 style={bulletContent}>* BULLET 3</h2>
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

export default PresentingRoom;