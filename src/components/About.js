import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/profile-pic_1.png"
              alt=""
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              <h3>2018-19 Beginning</h3>
              {resumeData.aboutme_1}
            </p>
            <p>
              <h3>2019-20 Completed MCA</h3>
              {resumeData.aboutme_2}
            </p>
            <p>
              <h3> Till Today Learning Day By Day</h3>
              {resumeData.aboutme_3}
            </p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>{resumeData.address}</span>
                  <br />
                  <span>{resumeData.website}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
