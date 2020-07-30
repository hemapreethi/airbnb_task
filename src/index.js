import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import'./index.css';
import {Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import user from './Images/user.svg';
import Foot from './Foot.js';
import Destination from './Destination.js';
import Cards from './Cards.js';
import Intro from './Intro.js';
import NavColumn from './Navcolumn.js';
import Covidresponse from './Covidresponse.js';
class Root extends React.Component{
render(){
return(
<div>
<NavColumn />
<Covidresponse />
<Intro />
<Cards  />
<Destination  />
<Foot  />
</div>
);
}
}
ReactDOM.render(<Root />, document.getElementById('root'));
