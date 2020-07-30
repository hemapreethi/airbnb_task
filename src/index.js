import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import'./index.css';
import {Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import entirehomes from './Images/entire homes.jpg';
import olympic from './Images/olympic.jpg';
import airbnb from './Images/airbnb.png';
import search from './Images/search.svg';
import onlineexperiences from './Images/online experiences.webp';
import yournextgetaway from './Images/your next getaway.webp';
import mindfulmovementwithadamkellerman from './Images/mindful movement with adam kellerman.jfif';
import exploresurflifewithjordysmith from './Images/explore surf life with jordy smith.webp';
import stronginsideandoutwithallysonfelix from './Images/strong inside and out with allyson felix.jpg'; 
import artofreinventionwithsimideleadeagbo from './Images/art of reinvention with simidele adeagbo.jpg';
import olympianandparalympianonlineexperiences from './Images/olympian and paralympian online experiences.webp';
import globe from  './Images/globe1.jpg';
import globe2 from  './Images/globe.png';
import user from './Images/user.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
class Navcolumn extends React.Component{
render(){
return(
<div>
<img src="Images/airbnb1.png" alt="airbnb"  height="70px" />
<aside style={{float:'right',paddingTop:'20px'}}>
<Form inline >
      <FormControl type="text" placeholder="Start your search " className="mr-sm-2" style={{borderRadius:'50px',paddingLeft:'80px'}} />
<img src={search} alt="search"  style={{borderRadius:'30px'}}/>
    </Form>
</aside>
</div>
);
}
}
class Nav2 extends React.Component{
render(){
return(
<div>
<aside  style={{float:'right',paddingLeft:'0px'}}>
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
</div>
);
}
}

class Intro extends React.Component{
render(){
return(
<div style={{paddingLeft:'80px',paddingTop:'20px'}}>
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
}


class Foot extends React.Component{
render(){
return(
<div class="last" style={{backgroundColor:'f0f1f0'}}>
<div id="abt" style={{backgroundColor:'f0f1f0'}}>
<br/>
<br/>


<table id="abtable" style={{backgroundColor:'f0f1f0',width:'100%',paddingLeft:'40px'}}>
<tr  >
<th  style={{paddingLeft:'80px'}}><small><b>ABOUT</b></small></th>
<th  style={{paddingLeft:'60px'}}><small><b>HOST</b></small></th>
<th  style={{paddingLeft:'30px'}}><small><b>COMMUNITY</b></small></th>
<th style={{paddingLeft:'20px'}}><small><b>SUPPORT</b></small></th>
</tr>
<tr  >
<td style={{paddingLeft:'60px'}}><a href="#">How Airbnb works</a></td>
<td style={{paddingLeft:'40px'}}><a href="#">Airbnb Magazine</a></td>
<td style={{paddingLeft:'10px'}}><a href="#">Host your home</a></td>
<td style={{paddingLeft:'0px'}}><a href="#">Updates for COVID-19</a></td>
</tr>
<tr >
<td style={{paddingLeft:'60px'}}><a href="#">Diversity & Belonging</a></td>
<td style={{paddingLeft:'40px'}}><a href="#">Airbnb Associates</a></td>
<td style={{paddingLeft:'10px'}}><a href="#">Host an online experience</a></td>
<td style={{paddingLeft:'0px'}}><a href="#">Help Centre</a></td>
</tr>
<tr >
<td style={{paddingLeft:'60px'}}><a href="#">Accessibility</a></td>
<td style={{paddingLeft:'40px'}}><a href="#">Airbnb for work</a></td>
<td style={{paddingLeft:'10px'}}><a href="#">Message from CEO Brian Chesky</a></td>
<td style={{paddingLeft:'0px'}}><a href="#">Cancellation options</a></td>
</tr>
<tr>
<td style={{paddingLeft:'60px'}}><a href="#">Trust & Safety</a></td>
<td style={{paddingLeft:'40px'}}><a href="#">Invite friends</a></td>
<td style={{paddingLeft:'10px'}}><a href="#">Responsible hosting</a></td>
<td style={{paddingLeft:'0px'}}><a href="#">Neighbourhood Support</a></td>
</tr>
<tr >
<td style={{paddingLeft:'60px'}}><a href="#">Airbnb Citizen</a></td>
<td style={{paddingLeft:'40px'}}><a href="#">Careers</a></td>
<td style={{paddingLeft:'10px'}}><a href="#">Open Homes</a></td>
<td style={{paddingLeft:'0px'}}></td>
</tr>
<tr >
<td style={{paddingLeft:'60px'}}><a href="#">Olympics</a></td>
<td style={{paddingLeft:'40px'}}></td>
<td style={{paddingLeft:'10px'}}><a href="#">Resource Centre</a></td>
<td style={{paddingLeft:'0px'}}></td>
</tr>
<tr >
<td style={{paddingLeft:'60px'}}><a href="#">Newsroom</a></td>
<td style={{paddingLeft:'40px'}}></td>
<td style={{paddingLeft:'10px'}}><a href="#">Community Centre</a></td>
</tr>
</table>
</div>
<hr/>
<aside style={{float:'right',backgroundColor:'f0f1f0'}}>
<ul style={{listStyle:'none',display:'inline',paddingLeft:'10px'}}>
<li  style={{paddingLeft:'10px'}}><a href="#"  ><img src={globe2} style={{width:'20px',height:'20px',color:'black'}}/> ENGLISH(IN)</a></li>
<li style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px'}}>&#8377; </a> INR</li>
<li style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px'}} >  <FontAwesomeIcon icon={faFacebook} size="1x" /></a></li>
<li style={{paddingLeft:'10px'}}><a href="#"  style={{fontSize:'16px'}}>  <FontAwesomeIcon icon={faTwitter} size="1x" /></a></li>
<li style={{paddingLeft:'10px'}}><a href="#"  style={{fontSize:'16px'}}>  <FontAwesomeIcon icon={faInstagram} size="1x" /></a></li>
</ul>
</aside>
<ul style={{listStyle:'none',display:'inline',paddingLeft:'80px'}}>
<li style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px'}}>&#xa9;  2020 Airbnb, Inc. All rights reserved</a></li>
<li style={{paddingLeft:'10px'}}><a href="#"  style={{fontSize:'16px'}}>&#8228;</a></li>
<li style={{paddingLeft:'10px'}}><a href="#"  style={{fontSize:'16px'}}>Privacy</a></li>
<li style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px'}} >&#8228;</a></li>
<li style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px'}} >Terms</a></li>
<li style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px'}} >&#8228;</a></li>
<li style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px'}} >Sitemap</a></li>
</ul>
</div>

);
}
}
class Destination extends React.Component{
render(){
const mystyle1={borderBottom:'1px solid #D3D3D3',borderSpacing:'30px',borderCollapse: 'separate',fontSize:'16px',textAlign:'left'};
return(
<div>
<div style={{backgroundColor:"black",padding:"80px"}}>
<aside style={{float:'right'}}>
<Button variant="black" style={{color:'white',border:'1px solid white'}}>Explore all</Button>{' '}</aside>
<aside style={{float:'left'}}>
<h1 style={{color:"white"}}>Connect with the world's best athletes</h1>
<p style={{color:"white"}}>
You're invited to a 5-day festival of Olympian & Paralympian<br/> Online Experiences. Join unique, interactive activities right<br/> from home.</p>
</aside>

<div class="row1">
<div class="column1">
<Card style={{borderRadius:'30px',border:'5px solid black'}}>
  <Card.Img variant="top" src={exploresurflifewithjordysmith} style={{ width: '100%',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',height:'660px'}}/>
<Card.Body style={{backgroundColor:'#171917',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px',color:'white'}}>
<Card.Title>Strong Inside and Out withAllyson Felix</Card.Title>
  </Card.Body>
</Card>
</div>
<div class="column1">
<div class="row1" >
<div class="column1">
<Card style={{borderRadius:'30px',border:'5px solid black'}}>
  <Card.Img variant="top" src={mindfulmovementwithadamkellerman} style={{ width: '100%',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}/>
<Card.Body style={{backgroundColor:'#171917',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px',color:'white'}}>
<Card.Title>Toast to life with Miles Chamley-Watson</Card.Title>
  </Card.Body>
</Card>
</div>
<div class="column1">
<Card style={{borderRadius:'30px',border:'5px solid black'}}>
  <Card.Img variant="top" src={artofreinventionwithsimideleadeagbo} style={{ width: '100%',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}/>
<Card.Body style={{backgroundColor:'#171917',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px',color:'white'}}>
<Card.Title>Glide and groove with Ashley Wagner</Card.Title>
  </Card.Body>
</Card>
</div>
</div>

<div class="row1" style={{paddingLeft:'30px'}}>

<Card style={{borderRadius:'30px',border:'5px solid black'}}>
  <Card.Img variant="top" src={stronginsideandoutwithallysonfelix} style={{ width: '100%',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',height:'275px'}}/>
<Card.Body style={{backgroundColor:'#171917',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px',color:'white'}}>
<Card.Title >Take a leap with Lex Gillette</Card.Title>
  </Card.Body>
</Card>
</div>

</div>
</div>
</div>
<br/><br/><br/><br/><br/>
<aside style={{float:'right',width:'45%'}}><p style={{fontSize:'20px',textAlign:'justify',paddingRight:'80px'}}>With frontline stays, Airbnb is partnering with our hosts to connect 100,000 healthcare providers, relief workers, and first responders with clean places to stay that allow them to be close to their patients - and safely distanced from their own families.</p></aside>
<div style={{width:'40%',paddingLeft:'100px'}}>
<h2>Host a hero:help to house frontline responders around the world</h2>
<Button  variant="light" style={{border:'1px solid black',borderRadius:'10px'}}> Get involved</Button><br/><br/><br/>
<br/><br/>
</div>

<table id="t" style={mystyle1}>
<h5 style={{paddingLeft:'40px',width:'100%'}}>Destination for future trips</h5>
<tr >
<td  style={mystyle1}><a href="#">San Francisco</a></td>
<td  style={mystyle1}><a href="#">Los Angeles</a></td>
<td  style={mystyle1}><a href="#">New York</a></td>
<td  style={mystyle1}><a href="#">Seattle</a></td>
</tr>
<tr >
<td  style={mystyle1}><a href="#">Denver</a></td>
<td style={mystyle1} ><a href="#">Washington</a></td>
<td  style={mystyle1}><a href="#">Phoenix</a></td>
<td  style={mystyle1}><a href="#">Austin</a></td>
</tr>
<tr>
<td  ><a href="#">Houston</a></td>
<td><a href="#">new Orleans</a></td>
<td  ><a href="#">Boston</a></td>
<td ><a href="#">Miami</a></td>
</tr>
</table>
</div>
);
}
}
class Cards extends React.Component{
render(){
return(
<div>
<br/>
<div class="row" >
<div class="column">
<Card style={{borderRadius:'20px',boxShadow:' 10px 10px 10px #D3D3D3'}}>
  <Card.Img variant="top" src={onlineexperiences} style={{borderTopLeftRadius:'20px',borderTopRightRadius:'20px',height:'310px'}}/>
  <Card.Body>
    <Card.Title>Online Experiences</Card.Title>
    <Card.Text>
    Unique activities we can do together, led by a world of hosts.
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div class="column"  >
<Card style={{borderRadius:'20px',boxShadow:' 10px 10px 10px #D3D3D3'}}>
  <Card.Img variant="top" src={yournextgetaway} style={{borderTopLeftRadius:'20px',borderTopRightRadius:'20px',height:'310px'}}/>
  <Card.Body>
    <Card.Title>Your next getaway</Card.Title>
    <Card.Text>
      Switch off or reconnect on a trip that's just a short drive away.
    </Card.Text>
   
  </Card.Body>
</Card>
</div>
<div class="column">
<Card style={{borderRadius:'20px',boxShadow:' 10px 10px 10px #D3D3D3'}}>
  <Card.Img variant="top" src={entirehomes} style={{ borderTopLeftRadius:'20px',borderTopRightRadius:'20px',height:'310px'}}/>
  <Card.Body>
    <Card.Title>Entire homes</Card.Title>
    <Card.Text>Comfortable private places,with room for friends or family.
    </Card.Text>
  </Card.Body>
</Card>
</div>
</div>
</div>
);
}
}
class Covidresponse extends React.Component{
render(){
return(
<div class="covidres" >
<center><p><a href="#">Get the latest on our COVID-19 response</a></p></center>
</div>
);
}
}ReactDOM.render(<Covidresponse />, document.getElementById('covidres'));
ReactDOM.render(<Navcolumn />, document.getElementById('nav-column'));
ReactDOM.render(<Nav2 />, document.getElementById('nav2'));
ReactDOM.render(<Destination  />, document.getElementById('destination'));
ReactDOM.render(<Cards  />, document.getElementById('cards'));
ReactDOM.render(<Foot  />, document.getElementById('foot'));
ReactDOM.render(<Intro  />, document.getElementById('container'));
