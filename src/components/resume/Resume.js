import React, { useState } from "react";
import Projects from "../projects/Projects";

const Resume = () => {
  const [showProject, setShowProject] = useState(false);

  const toggleProject = () => {
    setShowProject(!showProject);
  };

  return (
    <div className="container resume">
      <div className="section section__summary">
        <h2 className="section__title">Summary</h2>
        <p>
          I am a Web Developer architecting full-stack applications. I am
          passionate about learning the latest technologies whether that is
          frontend or backend. I am a stock investor as well. Occasionally, I
          write programs to scrape and visualize financial data in order to make
          investment decisions. Regarding front-end development, I mainly use a
          combination of JavaScript, React, HTML, and CSS to build interactive
          web pages. On the back-end, I develop the application by using Python
          and Node.js. Free feel to visit my{" "}
          <a
            className="gitButton"
            href="https://github.com/s777610"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </p>
      </div>

      <div className="section section__skill">
        <h2 className="section__title">Skill</h2>
        <ul>
          <li>
            <h3>Advanced: </h3>
            JavaScript, Node, React, Python, Flask, Express, Redux, Restful
          </li>
          <li>
            <h3>Familiar: </h3>
            SQL, MongoDB, Git, AWS, HTML5, CSS3, SASS, Visualization, Data
            Scraping, Integration Test, Unit Test
          </li>
          <li>
            <h3>Basic: </h3>
            Java, Docker, CD/CI, Redis, Hadoop
          </li>
        </ul>
      </div>

      <div className="section section__edu_exp_act">
        <h2 className="section__title">Education</h2>
        <h3>
          <span>California Lutheran University, Thousand Oaks, CA</span>
          <span className="duration">May.2017 - May.2019</span>
        </h3>

        <ul>
          <li>Master of Science in Information Technology (GPA: 3.8)</li>
        </ul>

        <h3>
          <span>Chung Yuan Christian University, Taoyuan, Taiwan</span>
          <span className="duration">Jun.2010 - Sep.2014</span>
        </h3>
        <ul>
          <li>Bachelor of Mechanical Engineering</li>
        </ul>
      </div>

      <div className="section section__edu_exp_act">
        <h2 className="section__title">Experience</h2>
        <h3>
          <span>Software Engineer Intern - Tap Series, Westlake, CA</span>
          <span className="duration">Aug. 2018 — Nov. 2018</span>
        </h3>
        <ul>
          <li>Scraped financial data by Python/Selenium/BeautifulSoup. </li>
          <li>Visualized financial data by Python/Seaborn/Plotly. </li>
          <li>Generated reports to make investing decisions by Python</li>
          <li>Tested and Maintained MySQL of online course platform. </li>
          <li>Integrated test of the mobile app with React</li>
        </ul>
        <h3>
          <span>Full Stack Developer - Locomotives, Changhua, Taiwan</span>
          <span className="duration">Nov. 2016 — May. 2017</span>
        </h3>
        <ul>
          <li>
            Increased rental rate by building email service for sending
            promotion code by Python/Flask.
          </li>
          <li>
            Increased rental rate on a weekday by 15% by analyzing customer data
            through Python/Plotly.
          </li>
          <li>Built front-end with JavaScript/React, CSS3, HTML5.</li>
          <li>
            Built back-end with Python/Flask and hosting on AWS Elastic
            Beanstalk.{" "}
          </li>
        </ul>
      </div>

      <div className="section section__edu_exp_act">
        <h2 className="section__title">Activity</h2>
        <h3>
          <span>Hackathon by the Sea Mentor, Camarillo</span>
          <span className="duration">Nov. 2018</span>
        </h3>
        <ul>
          <li>
            Helped participants to solve web development problems including
            JavaScript, Python, Node and React.
          </li>
          <li>
            Assisted participants in understanding Restful API and OAuth 2.0.{" "}
          </li>
          <li>Helped participants to solve CSS3 layout problems.</li>
        </ul>
        <h3>
          <span>Major League Hacking, SF Hacks 2018, San Francisco</span>
          <span className="duration">Mar. 2018</span>
        </h3>
        <ul>
          <li>Built RESTful API with Python Flask framework</li>
          <li>Designed database and implemented with SQLite</li>
        </ul>
      </div>
      <hr />

      <h2 className="section">Project Experience</h2>
      <button
        className="btn btn-outline-success showProjectButton"
        onClick={toggleProject}
      >
        {showProject ? "SHOW LESS" : "SHOW MORE ..."}
      </button>
      {showProject ? <Projects /> : null}
      <hr />
    </div>
  );
};

export default Resume;
