import React from 'react'
import  Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
    <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
      <Row className='mt-5 d-flex justify-content-center align-items-center'>
  
        <Col md={6}>
            <h2 className='mt-md-5'>Welcome to <span className='text-warning'>Media Player</span></h2>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum exercitationem ullam ex itaque modi illo iste natus consectetur. Minima ad et asperiores. Possimus nulla repellat magni quod. Quia, nisi deserunt.
            Illum ipsum tempora dolore fugit, sapiente in beatae, nostrum excepturi exercitationem ducimus placeat quo ex fuga. Dolorem quas voluptates eveniet id quos consectetur pariatur eos sint incidunt? Cumque, praesentium fugiat.</p>
          <Link to={'/home'}>  <button className='btn btn-warning mt-5'>Get Started</button></Link>
        </Col>
        <Col  md={1}></Col>
        <Col md={5} className='d-flex justify-content-center align-items-center mt-5 mt-md-0'>
        <img src="https://media.giphy.com/media/noLiBWJsX9mes/giphy.gif" alt="" className='w-75' />
        </Col>
       
      </Row>
    </Container>

    <Container className='d-flex flex-column justify-content-center align-items-center py-5 px-4'>
      <h1 className='m-5'>Features</h1>
      <div className='d-flex mb-5 cards-section'>
      <Card style={{ width: '15rem', height:'25rem' }} className='m-5'>
      <Card.Img variant="top" src="https://media0.giphy.com/media/WFmjWifrj9DJ50YaXj/giphy.gif?cid=6c09b952fvs7e8mnzs8l73frrl284kka0jmvs04x7rr0mc03&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" style={{height:'220px'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem', height:'25rem' }} className='m-5'>
      <Card.Img variant="top" src="https://media.tenor.com/eMrZP9HBkqEAAAAj/frkst-records.gif" style={{height:'220px'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem', height:'25rem' }} className='m-5'>
      <Card.Img variant="top" src="https://media.tenor.com/11u8gg1tMs4AAAAM/music-rock.gif" style={{height:'220px'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
    </Container>

    <div className='container'>
   <div className='row p-5'>
    <div className='col border border-secondary border-2 rounded p-4'>
    <div className='row'>
      <div className='col-md-6'>
        <h2 className='text-warning'>Simple fast and powerful</h2>
        <p><span className='fs-4'>Play Everything</span>Lorem ipsum dolor sit amet, consectetur adipisicing eli nsectetur, magni voluptas nobis mollitia quae non corrupti.</p>
        <p><span className='fs-4'>Play Everything</span>Lorem ipsum dolor sit amet, consectetur adipisicing eli nsectetur, magni voluptas nobis mollitia quae non corrupti.</p>
        <p><span className='fs-4'>Play Everything</span>Lorem ipsum dolor sit amet, consectetur adipisicing eli nsectetur, magni voluptas nobis mollitia quae non corrupti.</p>
      </div>
      <div className='col-md-6'>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/exkJKrAVzAc?si=K9OaXAA9rtd5xDVh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    </div>
   </div>
    </div>
    </>
  )
}

export default Landing

