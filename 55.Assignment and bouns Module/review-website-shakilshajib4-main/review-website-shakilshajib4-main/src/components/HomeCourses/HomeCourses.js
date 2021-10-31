import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';
import { Link } from 'react-router-dom';

const HomeCourses = () => {
    const [courses, setCourses] = useState([]);
    const coursesSlice = courses.slice(0, 4)
    useEffect(() => {
        fetch(`./courseData.JSON`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='mt-5 mb-5'>
            <h1 className='text-center mb-2'>Our Courses</h1>
            <p className='text-center mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum qui fugit voluptates et fuga?</p>

            <div className="container">
                <Row xs={1} md={4} className="g-4">
                    {
                        coursesSlice.map(course => <HomeCourse
                            course={course}
                        ></HomeCourse>)
                    }
                </Row>
            </div>
            <div className="event-btn">
                <Link id='menu-items' to="/course"><button className='btn-regular mt-5'>View All Courses</button></Link>
            </div>
        </div>
    );
};

export default HomeCourses;

