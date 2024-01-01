import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>

        <form action="https://formspree.io/f/xdopnoko" method="POST">
          <div class="row align-items-stretch mb-5">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  class="form-control"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name *"
                  required="required"
                  data-validation-required-message="Please enter your name."
                />
                <p class="help-block text-danger" />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email *"
                  required="required"
                  data-validation-required-message="Please enter your email address."
                />
                <p class="help-block text-danger" />
              </div>
              <div class="form-group mb-md-0">
                <input
                  class="form-control"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your Phone *"
                  required="required"
                  data-validation-required-message="Please enter your phone number."
                />
                <p class="help-block text-danger" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group form-group-textarea mb-md-0">
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  placeholder="Your Message *"
                  required="required"
                  data-validation-required-message="Please enter a message."
                />
                <p class="help-block text-danger" />
              </div>
            </div>
          </div>
          <div class="text-center">
            <div id="success" />
            <button
              class="btn btn-primary btn-xl text-uppercase"
              id="sendMessageButton"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    );
  }
}
