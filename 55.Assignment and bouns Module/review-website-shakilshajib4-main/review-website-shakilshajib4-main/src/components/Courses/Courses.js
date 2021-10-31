import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        //fetch(`./fakeDB.JSON`)
        fetch(`./courseData.JSON`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div className='mt-5 mb-5'>
            <h1 className='text-center heading mb-2'>Our <span>Courses</span></h1>
            <p className='text-center mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum qui fugit voluptates et fuga?</p>

            <div className="container">
                <Row xs={1} md={3} className="g-4">

                    {
                        courses.map(course => <Course
                            key={course.key}
                            course={course}
                        ></Course>)
                    }

                </Row>
            </div>




        </div>
    );
};

export default Courses;