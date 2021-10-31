import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import eventImg1 from '../../images/event-1.jpg'
import eventImg2 from '../../images/event-2.jpg'
import './Event.css'

const Event = () => {
    const mapMarker = <FontAwesomeIcon icon={faMapMarkerAlt} />
    return (
        <div className='m-5'>
            <h1 className='text-center mb-2'>Up Coming Events</h1>
            <p className='text-center mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum qui fugit voluptates et fuga?</p>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className='w-100 mt-3' src={eventImg1} alt="" />

                    </div>
                    <div className="col-md-8 event-text">
                        <h4>{mapMarker} Royal Confrence hall</h4>
                        <small>📅 Date: 05 OCT 2021</small>
                        <small> ⏲ Time: 0900H</small>
                        <h3>Topic: Laryngological Clinic</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co consequat. Duis aute irure dolor in reprehenderit in volu.</p>
                        <button className='btn-regular'>Read More</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <img className='w-100 mt-3' src={eventImg2} alt="" />
                    </div>
                    <div className="col-md-8 event-text">
                        <h4>{mapMarker} Royal Confrence hall</h4>
                        <small>📅 Date: 09 OCT 2021</small>
                        <small> ⏲ Time: 0900H</small>
                        <h3>Topic: Diabetes And Endocrinology</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co consequat. Duis aute irure dolor in reprehenderit in volu.</p>
                        <button className='btn-regular'>Read More</button>
                    </div>
                </div>
                <div className="event-btn">
                    <button className='btn-regular mt-5'>View All Events</button>
                </div>
            </div>
        </div>
    );
};

export default Event;