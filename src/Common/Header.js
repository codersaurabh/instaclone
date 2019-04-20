
import React, {Component} from "react";
const GenericData = require("./generic.json");

class InstaHeader extends Component {
  render() {
    let HeaderData = GenericData.header.map((val, i) => (
      <li className={val.class} key={i}>
        <a href={val.link} className="navigation__link">
          <i className={val.icon}/></a>
      </li>));

    return (
      <div>
        <nav className="navigation">
          <div className="navigation__column">
            <a href="feed.html">
              <img src="images/logo.png"/>
            </a>
          </div>
          <div className="navigation__column">
            <i className="fa fa-search"/>
            <input type="text" placeholder="Search"/>
          </div>
          <div className="navigation__column">
            <ul className="navigations__links">
              {HeaderData}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default InstaHeader;
