import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 flex-column mt-5 py-4 bg-primary'>
      <div className="footer d-flex justify-content-evenly align-items-top w-100">
        <div className="websites" style={{width:'400px'}}>
          <h4 className='mb-3 text-light'>
          <i class="fa-brands fa-opencart"></i>{' '}
              E cart
          </h4>
          <h6 className='text-light'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident tempore tempora, saepe temporibus accusamus suscipit cumque animi laboriosam obcaecati. Et itaque tempora doloribus ab, minus libero cum atque consectetur sed!
          </h6>
        </div>
        
        <div className="links d-flex flex-column text-light">
          <h4 className='mb-3 text-light'>Links</h4>   
          <Link to={'/'} style={{textDecoration:'none', color:'white'}} >Home</Link>
          <Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>Cart</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}>Wish List</Link>  
        </div>

        <div className="guides d-flex flex-column text-light">
          <h4 className='mb-3 text-light'>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}}>REACT</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}>REACT-BOOTSTRAP</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>BOOTSWATCHES</Link>  

        </div>
        <div className="contact text-light">
          <h4 className='mb-3 text-light'>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your Email'/>
            <button className='btn btn-warning ms-2 text-light'>Subscribe</button>
          </div>

          <div className='d-flex justify-content-between align-items-center mt-3 text-light'>
            <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-instagram fa-2x"></i></Link>
            <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-whatsapp fa-2x"></i></Link>
            <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-linkedin fa-2x"></i></Link>
            <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-solid fa-comment fa-2x"></i></Link>
          </div>

        </div>
      </div>
      <p className='mt-3'>Copyrigts @ 2023 Media Player. Built with REACT</p>
    </div>
  )
}

export default Footer
