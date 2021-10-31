import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeCourse = (props) => {
    console.log(props.course)
    const { title, description, img } = props.course;
    return (
        <div>
            <div>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{description} </Card.Text>

                        </Card.Body>
                        <button className='btn-regular'>Read More</button>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default HomeCourse;