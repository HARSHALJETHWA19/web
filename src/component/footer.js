import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Component } from 'react';
import React from 'react';

export default function Footer() {
  return (
    <div>
      <Navbar fixed='bottom' bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="#home" className='center'>Copyrights 2022 Harshal Jethwa</Nav.Link>
            
            
          </Nav>
        </Container>
      </Navbar>
      <br />
      

      
    </div>
  );
}

