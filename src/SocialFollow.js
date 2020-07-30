import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import globe2 from  './Images/globe.png';
import'./index.css';
import './index.scss';
class Fb extends React.Component{
render(){
  return (

<ul style={{listStyle:'none',display:'inline',paddingLeft:'10px'}}>
<li  style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px',color:'black'}} ><img src={globe2} style={{width:'20px',height:'20px'}}/> ENGLISH(IN)</a></li>
<li style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px',color:'black'}}>&#8377; </a> INR</li>
<li style={{paddingLeft:'10px',paddingRight:'10px'}}>
<a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social" style={{fontSize:'16px',color:'black'}}>
  <FontAwesomeIcon icon={faFacebook} size="1x" />
</a></li>
<li style={{paddingLeft:'10px',paddingRight:'10px'}}>
<a href="https://www.twitter.com/jamesqquick" className="twitter social" style={{fontSize:'16px',color:'black'}}>
  <FontAwesomeIcon icon={faTwitter} size="1x" />
</a></li>
<li style={{paddingLeft:'10px',paddingRight:'10px'}}>
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social" style={{fontSize:'16px',color:'black'}}>
  <FontAwesomeIcon icon={faInstagram} size="1x" />
</a>
</li>
</ul>
  );
}
}export default Fb;
