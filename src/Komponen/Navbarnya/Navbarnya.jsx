import React from "react";
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import logonya from './Image/spider.png';
import Tulisan from './Image/name.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Navbarnya extends React.Component {
    render() {
        return(
            
            
<div>
    <Navbar bg="dark" variant="dark" style={{ backgroundImage: 'linear-gradient(to right,#090418, #041D4E, #48196C,#561561)' }}>
        <Container fluid>
                <Navbar.Brand >
                    <img
                    src={logonya}
                    height='70'
                    alt=''
                    loading='lazy'
                    />{' '}
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link >
                        <img
                        src={Tulisan}
                        height='70'
                        alt=''
                        loading='lazy'
                        />{' '}
                    </Nav.Link>
            
                </Nav>
                <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pencarian"
              className="me-2"
              aria-label="Search"
            />
            <Button className="findHandle" variant="outline-success">Search</Button>
          </Form>
        </Container>
    </Navbar>
                
</div>
        )
    }
}