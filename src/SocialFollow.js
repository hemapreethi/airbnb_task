import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
faSearch
} from "@fortawesome/free-brands-svg-icons";
class Search extends React.Component{
render(){
  return (
<div>
<a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="1x" />
</a>
</div>
);
}
}
class Fb extends React.Component{
render(){
  return (
<ul >
<li>
<a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="1x" />
</a></li>
<li>
<a href="https://www.twitter.com/jamesqquick" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="1x" />
</a></li>
<li>
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="1x" />
</a>
</li>
</ul>

  );
}
}export default Fb;

ReactDOM.render(<Search />, document.getElementById('search'));