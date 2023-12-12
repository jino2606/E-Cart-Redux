import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Homie() {

  const data = useFetch("https://dummyjson.com/products")

  const dispatch = useDispatch()

  return (
    <Row className='ms-5 me-3' style={{marginTop:'150px'}}>

      {
        data?.length>0?
        data?.map((item) => (
          <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='p-3 rounded' style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
          <Carousel interval={null}>
            {
              item.images?.length>0?
              item.images?.map((img)=>(
              
                <Carousel.Item style={{height:'200px'}}>
                  <Card.Img variant="top" src={img} style={{height:'100%', objectFit: 'cover', objectPosition: 'top'}}/>  
                </Carousel.Item>
              
              ))
               :<h4>No Images To Show</h4>
            }
          </Carousel>
          <Card.Body>
            <Card.Title className='fw-bolder'>{item.title.slice(0,15)}...</Card.Title>
            <Card.Text>
              <p>{item.description.slice(0,50)}...</p>
              <p className='fw-bolder'>Price: ₹{item.price}</p>
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
              <Button onClick={()=>dispatch(addToWishlist(item))} variant="outline-danger btn rounded"><i class="fa-solid fa-heart"></i></Button>
              <Button onClick={()=>dispatch(addToCart(item))} variant="outline-success btn rounded"><i class="fa-solid fa-cart-plus"></i></Button>
            </div>
          </Card.Body>
          </Card>
          </Col> 
        )) 
        :<h1>No Data Found</h1>
        
      }
    </Row>
  )
}

export default Homie
