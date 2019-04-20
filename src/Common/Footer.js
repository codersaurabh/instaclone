import React, { Component } from "react";
import moment from "moment";
const FooterData = require("./generic.json");

class InstaFooter extends Component {
  render() {
    let footerData = FooterData.footer.map((val, i) => (
      <li className="footer__list-item" key={i}>
        <a href={val.link} className={val.class}>{val.name}</a>
      </li>
		));

    return (
      <div>
        <footer className="footer">
          <div className="footer__column">
            <nav className="footer__nav">
              <ul className="footer__list">
                {footerData}
              </ul>
            </nav>
          </div>
          <div className="footer__column">
            <span className="footer__copyright">© {moment().format("YYYY")} InstaClone</span>
          </div>
        </footer>
      </div>
    );
  }

}

export default InstaFooter;
