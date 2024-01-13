import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Logo from "../assets/logo.png";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="justify-content-between px-3">
        <div className="d-flex align-items-center font-weight-bold"> 
           <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Logo" style={{ width: "100px", height: "55px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link href="#">TV Shows</Nav.Link>
                <Nav.Link href="#">Movies</Nav.Link>
                <Nav.Link href="#">Recently Added</Nav.Link>
                <Nav.Link href="#">My List</Nav.Link>
            </Nav> 
        </div>

        <div className="d-flex align-items-center justify-content-between" style={{width: "7%"}}>
            <Navbar.Text><FaSearch /></Navbar.Text>
            <Navbar.Text className="text-decoration-none" id="kids" as={Link} to="/Settings">KIDS</Navbar.Text>
            <Navbar.Text><FaBell /></Navbar.Text>
            <Navbar.Text as={Link} to="/Profile"><FaUser /></Navbar.Text>
        </div>
    </Navbar>
  );
};

export default MyNavbar;