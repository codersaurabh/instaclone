import React from "react";
import PropTypes from "prop-types";

const ProfileHead = ({profile}) => (
  <div>
    <main id="profile">
      <header className="profile__header">
        <div className="profile__column">
          <img src="images/avatar.jpg" />
        </div>
        <div className="profile__column">
          <div className="profile__title">
            <h3 className="profile__username">{profile.username}</h3>
            <a href="edit-profile.html">Edit profile</a>
            <i className="fa fa-cog fa-lg" />
          </div>
          <ul className="profile__stats">
            <li className="profile__stat">
              <span className="stat__number">{profile.no_of_post}</span> posts
            </li>
            <li className="profile__stat">
              <span className="stat__number">{profile.followers_count}</span> followers
            </li>
            <li className="profile__stat">
              <span className="stat__number">{profile.following_count}</span> following
            </li>
          </ul>
          <p className="profile__bio">
            {profile.bio}
          </p>
        </div>
      </header>
    </main>
  </div>
);

// Mandatory props to use this component
ProfileHead.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileHead;
