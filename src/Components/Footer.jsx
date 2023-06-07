import React from 'react'
import { Container, Form, FloatingLabel,Button,Row,Col } from 'react-bootstrap'
function Footer() {
  return (
    <div className='m-0 bg-dark text-white text-capitalize'>
      <Container>
        <h2 className='m-5 pt-5 text-center'>
          join the adventure newsletter to recieve our best vacation deals{' '}
          <br />
          you can unsubscribe at any time.
        </h2>
        <Form className='d-flex justify-content-center m-5'>
          <FloatingLabel
            controlId='floatingInput'
            label='Email address'
            className='mb-3 d-inline-block'
          >
            <Form.Control
              type='email'
              style={{ width: 300 }}
              placeholder='name@example.com'
            />
          </FloatingLabel>
          <Button
            className=' d-inline-block ms-3'
            style={{ height: 60 }}
            variant='outline-light'
          >
            Subscribe
          </Button>
        </Form>
      </Container>
      <Container>
        <Row className='text-capitalize '>
          <Col></Col>
          <Col>
            <h4>About us</h4>
            <ul className=''>
              <li>how it works</li>
              <li>testimonials</li>
              <li>careers</li>
              <li>investors</li>
            </ul>
          </Col>
          <Col>
            <h4>Contact Us</h4>
            <ul>
              <li>Contact</li>
              <li>support</li>
              <li>destinations</li>
              <li>sponsorships</li>
            </ul>
          </Col>
          <Col>
            <h4>videos</h4>
            <ul>
              <li>submit video</li>
              <li>ambassandors</li>
              <li>agency</li>
              <li>influencer</li>
            </ul>
          </Col>
          <Col>
            <h4>social media</h4>
            <ul>
              <li>instagram</li>
              <li>facebook</li>
              <li>youtube</li>
              <li>twitter</li>
            </ul>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
