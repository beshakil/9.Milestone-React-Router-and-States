import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';



const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`serviceData.JSON`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='text-center mb-2'>Our Services</h1>
            <p className='text-center mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum qui fugit voluptates et fuga?</p>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <SingleService
                        service={service}
                    ></SingleService>)
                }
            </Row>
        </div>
    );
};

export default Services;

