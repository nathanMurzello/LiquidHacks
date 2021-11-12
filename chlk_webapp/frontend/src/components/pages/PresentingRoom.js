import React, { Component, Fragment} from "react";
import ReactDOM from "react-dom";
import {Link } from "react-router-dom";
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import  {getSlideshows} from '../../actions/slideshows';

import {Provider} from 'react-redux';
import store from '../../store';

export class PresentingRoom extends Component {
    
    static propTypes={
        slideshows: PropTypes.array.isRequired,
        getSlideshow: PropTypes.func.isRequired,
        rooms: PropTypes.array.isRequired
    };

    componentDidMount(){
        this.props.getSlideshows();
    }
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
                    <h1>PresentingRoom</h1>
                    
                    <div class="d-flex justify-content-center">
                        <Carousel fade>
                            <Carousel.Item>
                                <div style={rectangle}>
                                    <h1 style={titleContent}>CS 101</h1>
                                    <h2 style={bulletContent}>* ____: a way to store data </h2>
                                    <h2 style={bulletContent}>* Several different types</h2>
                                    <h2 style={bulletContent}>* Can be used by the rest of the program</h2>
                                </div>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div style={rectangle}>
                                    <h1 style={titleContent}>TITLE2</h1>
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

const mapStateToProps = state =>({
    slideshows: state.slideshows.slideshows
});

export default connect(mapStateToProps, { getSlideshows })(PresentingRoom);