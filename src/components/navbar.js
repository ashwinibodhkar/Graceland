import React, {useState, useEffect} from 'react';
import {Link} from 'gatsby'
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button,
    Container, Row, Col, 
    Collapse, Navbar, NavbarToggler, 
    NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

import '../css/navbar.css'

export default function ButtonAppBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    let listener = null
    const [scroll, setScroll] = useState(false);

    //change bg of navbar on scroll
    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 500);
        });
    }, []); 

    return (
        <div id="header-container" style={{position: 'fixed'}} 
            className={scroll ?  "bg-dark":"bg-black"}>
            <Navbar expand="md">
                <NavbarBrand ><NavLink to="/">Logo</NavLink></NavbarBrand>
                <NavbarToggler  onClick={toggle} >
                    {/* Close mark */}
                    <div id="close-icon" className={isOpen ? "open" : "" }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {/* close mark ends */}
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/" onClick={toggle}>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="#deals" onClick={toggle}>Deals</Link>
                        </NavItem>   
                        <NavItem>
                            <Link to="#about" onClick={toggle}>About</Link>
                        </NavItem> 
                        <NavItem>
                            <Link to="#contactUs" onClick={toggle}>Contact Us</Link>
                        </NavItem> 
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
