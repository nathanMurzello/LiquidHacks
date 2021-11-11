import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import  {getSlideshows, deleteSlideshow} from '../../actions/slideshows';

export class Slideshows extends Component {
    static propTypes={
        slideshows: PropTypes.array.isRequired,
        getSlideshows: PropTypes.func.isRequired,
        deleteSlideshow: PropTypes.func.isRequired
    };

    componentDidMount(){
        this.props.getSlideshows();
    }
    
    render() {
        return (
            <Fragment>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Created On</th>
                            <th>Num Of Slides</th>
                            <th />
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.slideshows.map(slideshow =>(
                            <tr key={slideshow.name}>
                                <td>{slideshow.name}</td>
                                <td>{slideshow.created_on}</td>
                                <td>{slideshow.slides.length}</td>
                                <td><button className="btn btn-success btn-sm">Open</button></td>
                                <td><button 
                                    onClick= {this.props.deleteSlideshow.bind(this,slideshow.id)}
                                    className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    slideshows: state.slideshows.slideshows
});

export default connect(mapStateToProps, { getSlideshows, deleteSlideshow })(Slideshows);
