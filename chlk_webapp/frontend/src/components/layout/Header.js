import React, {Component} from 'react'
import {Link } from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { logout } from '../../actions/auth'

export class Header extends Component {
    static propTypes={
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const {isAuthenticated, user}= this.props.auth;
        
        const teacherHome = (
            <li className="nav-item">
                <Link to="/TeacherHome" className="nav-link">Teacher Home</Link>
            </li>
        );
        const studentHome = (
            <li className="nav-item">
                <Link to="/StudentHome" className="nav-link"> Student Home</Link>
            </li>
        );
        


        const authLinks=(
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {teacherHome}
                {studentHome}
                <li className="nav-item">
                    <button onClick={this.props.logout}className="nav-link btn btn-primary btn-sm text-light">Logout </button>
                </li>          
            </ul>
        );

        const guestLinks=(
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>         
            </ul>
        );
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">CHLK</a>
                    </div>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}

const mapStateToProps =(state) => ({
    auth:state.auth,
});

export default connect (mapStateToProps, {logout })(Header);