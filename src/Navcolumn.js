import React from 'react';
import airbnb1 from './Images/airbnb1.png';
import user from './Images/user.svg';
import globe from  './Images/globe1.jpg';
import globe2 from  './Images/globe.png';
import {Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import './index.scss';
import'./index.css';
import search from './Images/search.svg';
class NavColumn extends React.Component{

render(){
return(
<div id="navbar">
<img src={airbnb1} alt="airbnb"  height="70px"style={{paddingLeft:'100px'}} />
<aside  style={{float:'right',paddingLeft:'0px',paddingRight:'80px'}}>
<Navbar  bg="light" expand="lg" style={{borderRadius:'50px'}}>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
      <NavDropdown title=<img src={user} /> id="basic-nav-dropdown">
        <NavDropdown.Item href="#"  style={{color:'black',textDecoration:'none',padding:'10px'}}>Sign up</NavDropdown.Item>
        <NavDropdown.Item href="#" style={{color:'black',textDecoration:'none',padding:'10px'}}>Log in</NavDropdown.Item>
<NavDropdown.Divider />
        <NavDropdown.Item href="#" style={{color:'black',textDecoration:'none',padding:'10px'}}>Host your home</NavDropdown.Item>
    <NavDropdown.Item href="#" style={{color:'black',textDecoration:'none',padding:'10px'}}>Host an experience</NavDropdown.Item>
    <NavDropdown.Item href="#" style={{color:'black',textDecoration:'none',padding:'10px'}}>Help</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</aside>
<aside  style={{float:'right',paddingRight:'30px'}}>
<Navbar background="transparent" expand="lg" style={{borderRadius:'50px'}} id="navt">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
      <NavDropdown title=<img src={globe} style={{width:'25px',height:'25px',color:'white',borderRadius:'50px'}}/>  id="basic-nav-dropdown">
        <NavDropdown.Item href="#" style={{borderRadius:'40px'}}><a href="#" style={{color:'black',textDecoration:'none',padding:'10px'}}><img src={globe2} style={{width:'25px',height:'25px',color:'black'}}/>ENGLISH(IN)</a></NavDropdown.Item>
        <NavDropdown.Item href="#">< a href="#" style={{color:'black',textDecoration:'none',padding:'10px'}}>&#8377; INR</a></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</aside>
<aside style={{float:'right',paddingTop:'20px',paddingRight:'250px'}}>
<Form inline >
      <FormControl type="text" placeholder="Start your search " className="mr-sm-2" style={{borderRadius:'50px',paddingLeft:'80px'}} />
<img src={search} alt="search"  style={{borderRadius:'30px'}}/>
    </Form>
</aside>
</div>
);
}
}
export default NavColumn;