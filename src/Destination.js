import React from 'react';
import './index.scss';
import'./index.css';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap'; 
import onlineexperiences from './Images/online experiences.webp';
import yournextgetaway from './Images/your next getaway.webp';
import mindfulmovementwithadamkellerman from './Images/mindful movement with adam kellerman.jfif';
import exploresurflifewithjordysmith from './Images/explore surf life with jordy smith.webp';
import stronginsideandoutwithallysonfelix from './Images/strong inside and out with allyson felix.jpg'; 
import artofreinventionwithsimideleadeagbo from './Images/art of reinvention with simidele adeagbo.jpg';
import olympianandparalympianonlineexperiences from './Images/olympian and paralympian online experiences.webp';
class Destination extends React.Component{
render(){
const mystyle1={borderBottom:'1px solid #D3D3D3',borderSpacing:'25px',borderCollapse: 'separate',fontSize:'16px',textAlign:'left'};
return(
<div>
<div style={{backgroundColor:"black",padding:"85px"}}>
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

<div class="row1">
<Card style={{borderRadius:'30px',border:'5px solid black'}}>
  <Card.Img variant="top" src={stronginsideandoutwithallysonfelix} style={{ width: '100%',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',height:'265px'}}/>
<Card.Body style={{backgroundColor:'#171917',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px',color:'white'}}>
<Card.Title >Take a leap with Lex Gillette</Card.Title>
  </Card.Body>
</Card>
</div>

</div>
</div>
</div>
<br/><br/><br/>
<aside style={{float:'right',width:'49%'}}><p style={{fontSize:'20px',textAlign:'justify',paddingRight:'100px'}}>With frontline stays, Airbnb is partnering with our hosts to connect 100,000 healthcare providers, relief workers, and first responders with clean places to stay that allow them to be close to their patients - and safely distanced from their own families.</p></aside>
<div style={{width:'40%',paddingLeft:'100px'}}>
<h2>Host a hero:help to house frontline responders around the world</h2>
<Button  variant="light" style={{border:'1px solid black',borderRadius:'10px'}}> Get involved</Button><br/><br/><br/>
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
}export default Destination;