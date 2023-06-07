import React from 'react'
import vid from '../videos/video-1.mp4'
import { img1, img2, img3, img4, img6 } from '../images'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
function Home() {
  return (
    <>
      <Card className='border-0'>
        <video src={vid} autoPlay loop muted className='w-100' />
        <Card.ImgOverlay className='text-white d-flex flex-column justify-content-center align-items-center text-uppercase'>
          <h1 className='fs-100'> Adventure awaits</h1>
          <h4>what are you waiting for ?</h4>
          <div>
            <Button
              variant=' outline-light'
              className='rounded-1 border text-uppercase'
            >
              Get started
            </Button>{' '}
            <Button variant='light' className='rounded-1 text-uppercase'>
              watch trailer <FontAwesomeIcon icon={faCirclePlay} />
            </Button>
          </div>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <h2 className='text-capitalize mt-5 text-center'>
          check out our Summer events !!
        </h2>
        <Row className='mt-5'>
          <Col></Col>
          <Col lg={4}>
            <Card className='border-0'>
              <Card.Img
                className='rounded-0'
                style={{ height: 300 }}
                src={img1}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className='border-0'>
              <Card.Img
                className='rounded-0'
                style={{ height: 300 }}
                src={img2}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col lg={3}>
            <Card className='border-0'>
              <Card.Img
                className='rounded-0'
                style={{ height: 150 }}
                src={img3}
              />
              <Card.Body>
                <Card.Title className='h5'>Card Title</Card.Title>
                <Card.Text className=' fs-6'>
                  Some quick example text to build on the card title and make up
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className='border-0'>
              <Card.Img
                className='rounded-0'
                style={{ height: 150 }}
                src={img4}
              />
              <Card.Body>
                <Card.Title className='h5'>Card Title</Card.Title>
                <Card.Text className=' fs-6'>
                  Some quick example text to build on the card title and make up
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className='border-0'>
              <Card.Img
                className='rounded-0'
                style={{ height: 150 }}
                src={img6}
              />
              <Card.Body>
                <Card.Title className='h5'>Card Title</Card.Title>
                <Card.Text className=' fs-6'>
                  Some quick example text to build on the card title and make up
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
