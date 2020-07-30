import React from "react";
import './index.scss';
import './index.css';
import olympic from './Images/olympic.jpg';
import airbnb from './Images/airbnb.png';
import user from './Images/user.svg';
import {Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import globe from  './Images/globe1.jpg';
import globe2 from  './Images/globe.png';
class Intro extends React.Component{
render(){
return(
<div id="container" style={{width:'100%'}}>
<img src={airbnb} style={{height:'80px',width:'7%'}}/>
<aside  style={{float:'right',width:'10%',paddingLeft:'0px'}}>
<Navbar  bg="light" expand="lg" style={{borderRadius:'50px',width:'70%'}}>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
      <NavDropdown title=<img src={user} />  id="basic-nav-dropdown">
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
<aside  style={{float:'right',paddingLeft:'0px'}}>
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

<aside style={{float:'right',width:'70%'}}>

<center>
<ul class="list"  >	
<li><a href="#" style={{textDecoration:'none',color:'white',fontSize:'18px'}}>Places to stay</a></li>
<li><a href="#" style={{textDecoration:'none',color:'white',fontSize:'18px'}}>Experiences</a></li>
<li><a href="#" style={{textDecoration:'none',color:'white',fontSize:'18px'}}>Online Experiences</a></li>
</ul>
</center>

<center>
<Navbar bg="light" expand="lg" style={{borderRadius:'50px',width:'75%'}}>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"  style={{width:'100%',height:'50px'}}>
      <Nav.Link href="#" className="items" style={{borderRight:'1px solid grey',width:'30%'}}>
<small style={{color:'black',fontWeight:'bold'}}>LOCATION</small><br/>
<small style={{color:'grey'}}>where are you going?</small>
</Nav.Link>
      <Nav.Link href="#link" className="items"  style={{borderRight:'1px solid grey',width:'20%'}}><small style={{color:'black',fontWeight:'bold'}}>CHECK IN</small><br/>
<small style={{color:'grey'}}>Add dates</small></Nav.Link>
   <Nav.Link href="#"  className="items" style={{borderRight:'1px solid grey',width:'20%'}}><small style={{color:'black',fontWeight:'bold'}}>CHECK OUT</small><br/>
<small style={{color:'grey'}}>Add dates</small></Nav.Link>
   <Nav.Link href="#link" className="items"  style={{borderRight:'1px solid grey',width:'20%'}}><small style={{color:'black',fontWeight:'bold'}}>GUESTS</small><br/>
<small style={{color:'grey'}}>Add guests</small></Nav.Link>
 <Button style={{backgroundColor:'#E91E63',border:'2px solid #E91E63',borderRadius:'50px',width:'20%'}}>Search</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</center></aside>

<br/>
<div>
<br/><br/><br/>
<img src={olympic}  style={{width:'10%'}}/>

</div>
<h6 style={{color:'white',width:'25%'}}>INTRODUCING</h6>
<h2 style={{color:'white',width:'25%'}}>Olympian & Paralympian Online Experiences</h2>
<p  style={{color:'white',width:'25%'}}>Join medallist Kerri Walsh jennings, and a <br/>team of world-class atheletes</p>
<Button variant="light">Learn more</Button>{' '}
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>
);
}
}export default Intro;