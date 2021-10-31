import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const { title, img, description } = props.course;
    console.log(props.course)
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                    <button className='btn-regular'>Read More</button>
                </Card>
            </Col>
        </div>
    );
};

export default Course;