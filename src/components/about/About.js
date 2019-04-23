import React, { Component } from "react";
import profile from "../../assets/profile.png";
import Title from "./Title";

class About extends Component {
  state = {
    dispalyBio: false
  };

  toggleDisplayBio = () => {
    this.setState({ dispalyBio: !this.state.dispalyBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Wei Cheng. </p>
        <Title />
        <p>I'm a self-motivated learner and code every day.</p>
        {this.state.dispalyBio ? (
          <div>
            <p>I'm a Web Developer architecting full-stack applications.</p>
            <p>
              I'm passionate about learning the latest technologies whether that
              is frontend or backend.
            </p>
            <p>Besides coding, I'm interested in stock market.</p>
            <p>
              I write programs to scrape and visualize financial data in order
              to make investment decisions.
            </p>
            <p>Feel free to look around my site and contact me!</p>
            <button
              className="btn btn-outline-success"
              onClick={this.toggleDisplayBio}
            >
              Show Less
            </button>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-outline-success"
              onClick={this.toggleDisplayBio}
            >
              Read More...
            </button>
          </div>
        )}
        <hr />
      </div>
    );
  }
}

export default About;
