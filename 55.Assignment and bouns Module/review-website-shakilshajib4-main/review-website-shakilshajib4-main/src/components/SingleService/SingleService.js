import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SingleService = (props) => {
    const { img, title, description } = props.service;
    const arrow = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <h5>Read More {arrow}</h5>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default SingleService;