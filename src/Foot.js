import React from 'react';
import './index.scss';
import'./index.css';
import Fb from './SocialFollow.js';
class Foot extends React.Component{
render(){
return(
<div class="last" style={{backgroundColor:'f0f1f0'}}>
<div id="abt" style={{backgroundColor:'f0f1f0'}}>
<br/>
<br/>
<table id="abtable" style={{backgroundColor:'f0f1f0',width:'100%',paddingLeft:'40px'}}>
<tr  >
<th  style={{paddingLeft:'105px'}}><small><b>ABOUT</b></small></th>
<th  style={{paddingLeft:'75px'}}><small><b>HOST</b></small></th>
<th  style={{paddingLeft:'50px'}}><small><b>COMMUNITY</b></small></th>
<th style={{paddingLeft:'20px'}}><small><b>SUPPORT</b></small></th>
</tr>
<tr  >
<td style={{paddingLeft:'105px'}}><a href="#">How Airbnb works</a></td>
<td style={{paddingLeft:'75px'}}><a href="#">Airbnb Magazine</a></td>
<td style={{paddingLeft:'50px'}}><a href="#">Host your home</a></td>
<td style={{paddingLeft:'20px'}}><a href="#">Updates for COVID-19</a></td>
</tr>
<tr >
<td style={{paddingLeft:'105px'}}><a href="#">Diversity & Belonging</a></td>
<td style={{paddingLeft:'75px'}}><a href="#">Airbnb Associates</a></td>
<td style={{paddingLeft:'50px'}}><a href="#">Host an online experience</a></td>
<td style={{paddingLeft:'20px'}}><a href="#">Help Centre</a></td>
</tr>
<tr >
<td style={{paddingLeft:'105px'}}><a href="#">Accessibility</a></td>
<td style={{paddingLeft:'75px'}}><a href="#">Airbnb for work</a></td>
<td style={{paddingLeft:'50px'}}><a href="#">Message from CEO Brian Chesky</a></td>
<td style={{paddingLeft:'20px'}}><a href="#">Cancellation options</a></td>
</tr>
<tr>
<td style={{paddingLeft:'105px'}}><a href="#">Trust & Safety</a></td>
<td style={{paddingLeft:'75px'}}><a href="#">Invite friends</a></td>
<td style={{paddingLeft:'50px'}}><a href="#">Responsible hosting</a></td>
<td style={{paddingLeft:'20px'}}><a href="#">Neighbourhood Support</a></td>
</tr>
<tr >
<td style={{paddingLeft:'105px'}}><a href="#">Airbnb Citizen</a></td>
<td style={{paddingLeft:'75px'}}><a href="#">Careers</a></td>
<td style={{paddingLeft:'50px'}}><a href="#">Open Homes</a></td>
<td style={{paddingLeft:'20px'}}></td>
</tr>
<tr >
<td style={{paddingLeft:'105px'}}><a href="#">Olympics</a></td>
<td style={{paddingLeft:'75px'}}></td>
<td style={{paddingLeft:'50px'}}><a href="#">Resource Centre</a></td>
<td style={{paddingLeft:'20px'}}></td>
</tr>
<tr >
<td style={{paddingLeft:'105px'}}><a href="#">Newsroom</a></td>
<td style={{paddingLeft:'75px'}}></td>
<td style={{paddingLeft:'50px'}}><a href="#">Community Centre</a></td>
</tr>
</table>
</div>
<hr/>

<aside style={{float:'right',backgroundColor:'f0f1f0'}}>
<Fb />

</aside>
<ul style={{listStyle:'none',display:'inline',paddingLeft:'95px'}}>
<li style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px',color:'black'}}>&#xa9;  2020 Airbnb, Inc. All rights reserved</a></li>
<li style={{paddingLeft:'10px'}}><a href="#"  style={{fontSize:'16px',color:'black'}}>&#8228;</a></li>
<li style={{paddingLeft:'10px'}}><a href="#"  style={{fontSize:'16px',color:'black'}}>Privacy</a></li>
<li style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px',color:'black'}} >&#8228;</a></li>
<li style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px',color:'black'}} >Terms</a></li>
<li style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px',color:'black'}} >&#8228;</a></li>
<li style={{paddingLeft:'10px'}}><a href="#" style={{fontSize:'16px',color:'black'}} >Sitemap</a></li>
</ul>
</div>

);
}
}export default Foot;