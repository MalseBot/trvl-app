import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
function NavBar() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/' className='fw-bolder fs-2'>Trvl</Navbar.Brand>
          <Nav className=' me-3 fw-bold'>
            <Nav.Link className='text-white me-5' href='/'>
              Service
            </Nav.Link>
            <Nav.Link className='text-white me-5' href='/'>
              Products
            </Nav.Link>
            <Button
              variant='outline-light'
              className=' me-5 rounded-1 '
              href='/'
            >
              SIGN UP
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
