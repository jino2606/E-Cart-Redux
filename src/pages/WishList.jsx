import React from 'react'
import { Button, Card, Carousel, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';


function WishList() {

  const wishList = useSelector((state)=> state.wishlishReducer)
  console.log("Wistlist", wishList, wishList.length);
  const dispatch = useDispatch()

  return (
    <div style={{marginTop: "200px"}}>
      <Row>
        {
          wishList?.length>0?
          wishList?.map((item)=>(
          <Col>
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
                  <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger btn rounded"><i class="fa-solid fa-trash"></i></Button>
                  <Button onClick={()=>{dispatch(addToCart(item)); dispatch(removeFromWishlist(item.id))}} variant="outline-success btn rounded"><i class="fa-solid fa-cart-plus"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          )):
          <div>
              <h1 className='text-center'>Wishlist Is Empty</h1>
              <Link className='text-center' to={'/'}>
                <p>Take me to HOME</p>
              </Link>
          </div>
        }
      </Row>
    </div>
  )
}

export default WishList
