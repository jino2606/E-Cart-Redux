import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    
    const wishList = useSelector((state)=>state.wishlishReducer)
    const cartItems = useSelector((state)=>state.cartReducer)

  return (
    <>
        {/* <nav class="navbar navbar-expand-lg bg-primary position-fixed top-0 w-100" data-bs-theme="dark" style={{zIndex: '1000'}}>
            <div class="container">
                <a class="navbar-brand" href="#">
                    <i class="fa-brands fa-opencart me-2 text-light"> E-Cart</i>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                    <a class="nav-link active" href="/">Home
                        <span class="visually-hidden">(current)</span>
                    </a>
                    </li>
                    <li class="nav-item border border-rounded">
                    <a class="nav-link active" href="/wishlist">
                        <i class="fa-solid fa-heart me-2" style={{color: '#e60a0a'}}>
    
                        </i>
                        Wish List
                        <Badge bg="secondary" className='rounded ms-2'>{wishList.length}</Badge></a>
                        <span class="visually-hidden">(current)</span>
                    </li>
                    <li class="nav-item border border-rounded">
                    <a class="nav-link active" href="/cart">
                        <i class="fa-solid fa-cart-shopping  me-2" style={{color: 'yellow'}}></i>
                        Cart
                        <Badge bg="secondary" className='rounded ms-2'>4</Badge>
                        </a>
                        <span class="visually-hidden">(current)</span>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-sm-2" type="search" placeholder="Search" />
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav> */}

        <Navbar expand="lg" className="bg-primary fixed-top" >
            <Container>
                <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-cart-shopping fa-bounce me-3"></i> E-Cart</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className='btn border rounded border-secondary ms-4 mt-2'><Link to={'/wishList'} style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-heart me-2" style={{color: '#e60a0a'}}></i>WishList <Badge bg="secondary" className='rounded ms-2'>{wishList.length}</Badge></Link></Nav.Link>
                    <Nav.Link className='btn border rounded border-secondary ms-4 mt-2' ><Link to={'/cart'} style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-cart-shopping  me-2" style={{color: 'yellow'}}></i> Cart <Badge bg="secondary"  className='rounded ms-2'>{cartItems.length}</Badge></Link></Nav.Link>
                
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header
