import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import { useState } from 'react';
import { useEffect } from 'react';

function Cart() {

  const cartArray = useSelector((state)=> state.cartReducer)
  const [cartTotal, setCartTotal] = useState(0)
  const dispatch = useDispatch()
  const navigte  = useNavigate()
  
  /* function to get the total */
  const calculateTotal = ()=>{

    cartArray.length>0?
    setCartTotal(cartArray.map(item => item.price).reduce((p1, p2) => p1 + p2))
    :setCartTotal(0) /* if the cart has no items set the total to 0 */

  }

  useEffect(()=>{
    calculateTotal()
  },[cartArray])

  const checkout = ()=>{
    alert("Your order is placed successfully")
    dispatch(emptyCart())
    navigte('/')
  }

  return (
    <div style={{marginTop:'150px'}}>
      { cartArray?.length>0?
      <div className='row w-100'> 
          <div className='col-lg-6 m-5'>
            <table className='table border shadow'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
              {
                cartArray?.map((item, index)=>(
                <tr>  
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td><img style={{height:'100px', width:'100px'}} src={item.thumbnail} alt="no image" /></td>
                  <td>{item.price}</td>
                  <td><Button onClick={()=>dispatch(removeFromCart(item.id))} variant="outline-danger btn rounded"><i class="fa-solid fa-trash"></i></Button></td>
                </tr>
                ))
                }
              </tbody>
            </table>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column ">
            <div className='border shadow p-5'>
              <h2 className='text-danger'>Cart summary</h2>
              <h5>Total Number of Products :<span className='text-primary fw-bolder fs-2 ms-3'>{cartArray.length}</span></h5>
              <h5>Total Price :<span className='text-primary fw-bolder fs-3 ms-3'> ₹{cartTotal}</span></h5>
              <button onClick={checkout} className='btn btn-success rounded w-100 mt-3'>CheckOut</button>
            </div>
          </div>
      </div>:
      <div style={{ height: '100vh' }} className='d-flex flex-column justify-content-center align-items-center'>
        <img height={'300px'} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="no image" />
        <h4 className='text-danger fw-bolder'>Your cart is empty</h4>
        <button className='btn btn-success rounded mt-3'><Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}> Back to Home</Link></button>
      </div>
    }
    </div>
  )
}

export default Cart
