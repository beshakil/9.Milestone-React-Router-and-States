import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerImg from '../../images/header-bg.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" bg='dark' variant="dark">
                <Container>

                    <Nav.Link className='text-dark' ><Link id='menu-items' to="/home">Classic Medical Institute</Link></Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto menu">

                            <Nav.Link className='text-dark' ><Link id='menu-items' to="/about">About Us</Link></Nav.Link>
                            <Nav.Link className='text-dark' ><Link id='menu-items' to="/course">Courses</Link></Nav.Link>
                            <Nav.Link className='text-dark' ><Link id='menu-items' to="/services">Services</Link></Nav.Link>
                            <Nav.Link className='text-dark' ><Link id='menu-items' to="/event">Events</Link></Nav.Link>
                            <Nav.Link className='text-dark' ><Link id='menu-items' to="/Contact">Contact Us</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="header-text">
                            <div className="header-details">
                                <h3>Well come To Classic Medical Institute</h3>
                                <h1>Classic Medical Is Best In Medical</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid et fuga excepturi temporibus vitae laborum, molestias asperiores repudiandae nihil porro.</p>
                                <button className='btn-regular'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 header-img">
                        <img className='' src={headerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;