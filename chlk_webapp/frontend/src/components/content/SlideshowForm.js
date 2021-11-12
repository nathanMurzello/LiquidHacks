import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {addSlideshow} from "../../actions/slideshows";


export class SlideshowForm extends Component {
    state ={
        name:'',
        slides: []
    };

    static propTypes = {
        addSlideshow: PropTypes.func.isRequired
    };

    onChange =e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e =>{
        e.preventDefault();
        const {name, slides} =this.state;
        
        const slideshow={name, slides};
        this.props.addSlideshow(slideshow);
    };

    render() {
        const { name} = this.state;
        return (
          <div className="card card-body ">
            <h2>Edit Slideshow</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  defaultValue={name}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
      }
}

export default connect(null, {addSlideshow})(SlideshowForm);
