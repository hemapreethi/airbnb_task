import React from 'react';
import {Card} from 'react-bootstrap';
import entirehomes from './Images/entire homes.jpg';
import onlineexperiences from './Images/online experiences.webp';
import yournextgetaway from './Images/your next getaway.webp';
class Cards extends React.Component{
render(){
return(
<div>
<br/>
<center>
<table style={{paddingLeft:'30px'}}>
<tr>
<td style={{width:'25em',borderCollapse: 'separate',paddingLeft:'10px'}}>
<Card style={{borderRadius:'20px',boxShadow:' 10px 10px 10px #D3D3D3'}}>
  <Card.Img variant="top" src={onlineexperiences} style={{borderTopLeftRadius:'20px',borderTopRightRadius:'20px',height:'250px'}}/>
  <Card.Body>
    <Card.Title>Online Experiences</Card.Title>
    <Card.Text>
    Unique activities we can do together, led by a world of hosts.
    </Card.Text>
  </Card.Body>
</Card>
</td>
<td  style={{width:'25em',borderCollapse: 'separate',paddingLeft:'10px'}}>
<Card style={{borderRadius:'20px',boxShadow:' 10px 10px 10px #D3D3D3'}}>
  <Card.Img variant="top" src={yournextgetaway} style={{borderTopLeftRadius:'20px',borderTopRightRadius:'20px',height:'250px'}}/>
  <Card.Body>
    <Card.Title>Your next getaway</Card.Title>
    <Card.Text>
      Switch off or reconnect on a trip that's just a short drive away.
    </Card.Text>
  </Card.Body>
</Card>
</td>
<td  style={{width:'25em',borderCollapse: 'separate',paddingLeft:'10px'}}>
<Card style={{borderRadius:'20px',boxShadow:' 10px 10px 10px #D3D3D3'}}>
  <Card.Img variant="top" src={entirehomes} style={{ borderTopLeftRadius:'20px',borderTopRightRadius:'20px',height:'250px'}}/>
  <Card.Body>
    <Card.Title>Entire homes</Card.Title>
    <Card.Text>Comfortable private places,with room for friends or family.
    </Card.Text>
  </Card.Body>
</Card>
</td>
</tr>
</table></center>
<br/><br/><br/>
</div>
);
}
}export default Cards;