import React, { Component } from "react";
import InstaProfile from "../components/Profile";
import { connect } from "react-redux";

class InstaProfileContainer extends Component {

  render() {
    return (
      <InstaProfile {...this.props}/>
    );
  }
};

export const mapStateToProps = store => {
  return {
    count: store.count
  };
};

export default connect(mapStateToProps, null)(InstaProfileContainer);
