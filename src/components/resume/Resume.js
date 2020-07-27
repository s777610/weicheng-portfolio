import React, { useState } from 'react';
import Projects from '../projects/Projects';
const getSkills = (skill) => {
  return <span className="highlight">{skill}</span>;
};

const Resume = () => {
  const [showProject, setShowProject] = useState(false);

  const toggleProject = () => {
    setShowProject(!showProject);
  };
  const node = getSkills('Node');
  const react = getSkills('React');
  const aws = getSkills('AWS');
  const python = getSkills('Python');
  const mysql = getSkills('MySQL');
  const js = getSkills('JavaScript');
  const css3 = getSkills('CSS3');
  const html5 = getSkills('HTML5');
  const gql = getSkills('GraphQL');
  const rest = getSkills('Restful');

  return (
    <div className="container resume">
      <div className="section section__summary">
        <h2 className="section__title">Summary</h2>
        <p>
          I am a software engineer architecting full-stack applications,
          especially serverless application. I am passionate about learning the
          latest technologies whether that is frontend or backend. I am a stock
          investor as well. Occasionally, I write programs to scrape and
          visualize financial data in order to make investment decisions.
          Regarding front-end development, I mainly use a combination of {js},{' '}
          {react}, {html5}, and {css3} to build interactive web pages. On the
          back-end, I develop the application by using {node}, {gql}, {rest},{' '}
          {python} and {aws}. Free feel to visit my{' '}
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
            JavaScript, Node, React, GrahpQL, Restful, DynamoDB, Lambda, Redux,
            Serverless
          </li>
          <li>
            <h3>Familiar: </h3>
            AWS, Python, SQL, MongoDB, Git, HTML5, CSS3, SASS, Flask, Express,
            Data Scraping, Integration Test, Unit Test, CI/CD
          </li>
          <li>
            <h3>Basic: </h3>
            Java, Docker, Redis, Hadoop, Dart, Flutter
          </li>
        </ul>
      </div>

      <div className="section section__edu_exp_act">
        <h2 className="section__title">Work Experience</h2>
        <h3>
          <span>
            Software Engineer - Hornblower Cruises and Events, Westlake, CA
          </span>
          <span className="duration">Aug. 2019 — Current</span>
        </h3>
        <ul>
          <li>
            Designed and implemented booking system in partnership with Google
            by {node} and {aws}
          </li>
          <li>
            Implemented compass ticketing system which serves people around by{' '}
            {node}, {react} and {aws}.{' '}
          </li>
          <li>
            Designed and implemented API integration in partnership with
            GetYourGuide by {node}, {react} and {aws}.
          </li>
          <li>
            Completed booking system in partnership with Viator by {node},{' '}
            {react} and {aws}.
          </li>
          <li>
            Implemented Hornblower experience API integration in partnership
            with BigBusTour by {node}, {react} and {aws}.
          </li>
          <li>
            Designed and implemented Voucher Validation API in partnership with
            CityPass and Redeem by {node} and {aws}.
          </li>
          <li>
            Worked on Voucher Validation API for Niagara Falls and Statue of
            Liberty by {node}, {gql} and {aws}
          </li>
        </ul>
        <h3>
          <span>Software Engineer Intern - Tap Series, Westlake, CA</span>
          <span className="duration">Aug. 2018 — Nov. 2018</span>
        </h3>
        <ul>
          <li>Scraped financial data by {python}/Selenium/BeautifulSoup. </li>
          <li>Visualized financial data by {python}/Seaborn/Plotly. </li>
          <li>Generated reports to make investing decisions by {python}</li>
          <li>Tested and Maintained {mysql} of online course platform. </li>
          <li>Integrated test of the mobile app with {react}</li>
        </ul>
        <h3>
          <span>Full Stack Developer - Locomotives, Changhua, Taiwan</span>
          <span className="duration">Nov. 2016 — May. 2017</span>
        </h3>
        <ul>
          <li>
            Increased rental rate by building email service for sending
            promotion code by {python}/Flask.
          </li>
          <li>
            Increased rental rate on a weekday by 15% by analyzing customer data
            through {python}/Plotly.
          </li>
          <li>
            Built front-end with {js}/{react}, {css3}, {html5}.
          </li>
          <li>
            Built back-end with {python}/Flask and hosting on {aws} Elastic
            Beanstalk.{' '}
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
            Assisted participants in understanding Restful API and OAuth 2.0.{' '}
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

      <hr />

      <h2 className="section">Project Experience</h2>
      <button
        className="btn btn-outline-success showProjectButton"
        onClick={toggleProject}
      >
        {showProject ? 'SHOW LESS' : 'SHOW MORE ...'}
      </button>
      {showProject ? <Projects /> : null}
      <hr />
    </div>
  );
};

export default Resume;
