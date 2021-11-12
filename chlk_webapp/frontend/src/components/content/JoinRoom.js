import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getRoom} from "../../actions/rooms";


export class JoinRoom extends Component {
    state ={
        code:''
    };

    static propTypes = {
        getRoom: PropTypes.func.isRequired
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e =>{
        e.preventDefault();
        const {code} =this.state;
        
        this.props.getRoom(code);
        console.log("TEST2");
        console.log("TEST");

    };

    render() {
        const { code } = this.state;
        return (
            <div class= "container">
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">Join Room</h5>
                        <p class="card-text">Enter a code below to join a room.</p>
                        
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Code</label>
                                <input
                                className="form-control"
                                type="text"
                                name="code"
                                onChange={this.onChange}
                                defaultValue={code}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                            <div>
                                <Link to = {`/PresentingRoom/${code}`}>
                                    <button type="button" className="btn btn-primary"> Join the Room</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null, {getRoom})(JoinRoom);