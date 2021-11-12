import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Landing_page_accounts extends Component {
    render() {
        const descriptionBlurb={
            textAlign: 'center'
        }
        const sectionPadder={
            paddingTop: 20,
            paddingBottom: 20,
        }
        return (
            <div class= "container">
            <div class= "row">
                <div style= {sectionPadder}>
                    <div class="card text-center">
                        <h4 style= {descriptionBlurb}>CHLK, the custom help learning kit, is an interactive online slideshow that allows for teachers to present information to students in an engaging manner. The concept behind CHLK is to create an environment in which teacher and student can digitally communicate and allow for more two-sided interaction. Through automated question creation based on teacher slides and questions asked in real time on slides, more time can be spent on genuine learning and understanding. Teachers will have more time to refine their lectures, and students will be able to participate and focus on online material while at home. CHLK inspires the growth and development of learning in the new digital age!</h4>
                    </div>
                </div>
            </div>
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
