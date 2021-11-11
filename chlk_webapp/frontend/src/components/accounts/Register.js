import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';

export class Register extends Component {
    state={
        username: '',
        password: '',
        password2: '',
        group:''
    }

    static propTypes ={
      register:PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool,
    }


    onSubmit= e =>{
        e.preventDefault();
        const{username, password, group} =this.state;
        const newUser={
          username,
          password,
          first_name :group
        };
        this.props.register(newUser);
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        const {username, password, password2}=this.state;
        return (
            <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
              <h2 className="text-center">Register</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.onChange}
                    defaultValue={username}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    defaultValue={password}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                    onChange={this.onChange}
                    defaultValue={password2}
                  />
                </div>
                
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="group" id="inlineRadio1" onChange={this.onChange} defaultValue="1"/>
                    <label class="form-check-label" for="inlineRadio1">Teacher</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="group" id="inlineRadio2" onChange={this.onChange} defaultValue="2" />
                    <label class="form-check-label" for="inlineRadio2">Student</label>
                </div>
                
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        )
    }
}
const mapStateToProps = state => ({
  isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps, {register} )(Register);
