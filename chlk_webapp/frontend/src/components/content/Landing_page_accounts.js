import React, { Component } from 'react'

export class Landing_page_accounts extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-sm-6">
                    <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">Teachers</h5>
                        <p class="card-text">Are you a teacher looking to create engaging presentations for your lecture?</p>
                        <a href="#" class="btn btn-primary">Teacher Account</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">Students</h5>
                        <p class="card-text">Are you a student looking to join a room to participate in a lecture?</p>
                        <a href="#" class="btn btn-primary">Student Account</a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing_page_accounts
