import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Event from '../Event/Event';
import HomeCourses from '../HomeCourses/HomeCourses.js';
import ServicesForHome from '../ServicesForHome/ServicesForHome';


const Home = () => {
    return (
        <div>
            <HomeCourses></HomeCourses>
            <ServicesForHome></ServicesForHome>
            <Event></Event>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;