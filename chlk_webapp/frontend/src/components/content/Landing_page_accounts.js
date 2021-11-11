import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Landing_page_accounts extends Component {
    render() {
        return (
            <div class= "container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">Teachers</h5>
                        <p class="card-text">Are you a teacher looking to create engaging presentations for your lecture?</p>
                        <div class ="btn-toolbar" role= "toolbar">
                            <Link to='/register'>
                                <button type="button" className="btn btn-primary"> Register Teacher Account</button>
                            </Link>
                            <Link to='/login'>
                                <button type="button" className="btn btn-primary"> Login to Teacher Account</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">Students</h5>
                        <p class="card-text">Are you a student looking to join a room to participate in a lecture?</p>
                        <div class ="btn-toolbar" role= "toolbar">
                            <Link to='/register'>
                                <button type="button" className="btn btn-primary"> Register Student Account</button>
                            </Link>
                            <Link to='/login'>
                                <button type="button" className="btn btn-primary"> Login to Student Account</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Landing_page_accounts
