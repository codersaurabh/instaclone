import React, { Component } from "react";
import NavigationHead from "../../Common/Header";
import ProfileHead from "./ProfileHead";
import Footer from "../../Common/Footer";

const ProfileData = require("./profile.json");

class InstaProfile extends Component {
  render() {
    return (
      <div>
        <NavigationHead/>
        <ProfileHead profile={ProfileData.profile}/>

        <section className="profile__photos">
          <div className="profile__photo">
            <img src="images/feedPhoto.jpg" />
            <div className="profile__photo-overlay">
              <span className="overlay__item">
                <i className="fa fa-heart" />
                486
              </span>
              <span className="overlay__item">
                <i className="fa fa-comment" />
                344
              </span>
            </div>
          </div>
          <div className="profile__photo">
            <img src="images/feedPhoto.jpg" />
            <div className="profile__photo-overlay">
              <span className="overlay__item">
                <i className="fa fa-heart" />
                486
              </span>
              <span className="overlay__item">
                <i className="fa fa-comment" />
                344
              </span>
            </div>
          </div>
          <div className="profile__photo">
            <img src="images/feedPhoto.jpg" />
            <div className="profile__photo-overlay">
              <span className="overlay__item">
                <i className="fa fa-heart" />
                486
              </span>
              <span className="overlay__item">
                <i className="fa fa-comment" />
                344
              </span>
            </div>
          </div>
          <div className="profile__photo">
            <img src="images/feedPhoto.jpg" />
            <div className="profile__photo-overlay">
              <span className="overlay__item">
                <i className="fa fa-heart" />
                486
              </span>
              <span className="overlay__item">
                <i className="fa fa-comment" />
                344
              </span>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }

}

export default InstaProfile;
