import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceForHome from '../ServiceForHome/ServiceForHome';
import { Link } from 'react-router-dom';

const ServicesForHome = () => {
    const [services, setServices] = useState([])
    const serviceSlice = services.slice(0, 4)
    useEffect(() => {
        fetch(`serviceData.JSON`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='mt-5 mb-5'>
                <h1 className='text-center mb-2'>Our Services</h1>
                <p className='text-center mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum qui fugit voluptates et fuga?</p>

                <div className="container">
                    <Row xs={1} md={4} className="g-4">
                        {
                            serviceSlice.map(service => <ServiceForHome
                                service={service}
                            ></ServiceForHome>)
                        }
                    </Row>
                </div>
                <div className="event-btn">
                    <Link id='menu-items' to="/services"><button className='btn-regular mt-5'>View All Services</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesForHome;