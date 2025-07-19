import React from 'react';

export default function Education() {
  return (
    <div id="education">
      <section className="edu-exp-section">
        <p className="sectionTag">– Education & Courses</p>
        <h2 className="sectionTitle">
          My <span className="highlight">Academic</span> and <span className="highlight">Professional</span> Journey
        </h2>

        <div className="edu-exp-grid">
          {/* Education */}
          <div className="edu-exp-cardd">
            <div className="cardHeader">
              <span className="icon">🎓</span>
              <h3>Education</h3>
            </div>
            <div className="cardItem">
              <p className="date">2022 – 2025</p>
              <p className="title">Faculty of Computers & Information</p>
              <p className="subTitle">Suez Canal University – Computer Science</p>
            </div>
          </div>

          {/* Courses */}
          <div className="edu-exp-card">
            <div className="cardHeader">
              <span className="icon">📘</span>
              <h3>Courses</h3>
            </div>
            <div className="cardItem">
              <p className="date">Aug 2024</p>
              <p className="title">React.js Development</p>
              <p className="subTitle">Digital Egypt Builders Initiative (DEBI)</p>
            </div>
            <div className="cardItem">
              <p className="date">Jul 2024</p>
              <p className="title">Advanced Web Development with React</p>
              <p className="subTitle">ITI – Information Technology Institute</p>
            </div>
            <div className="cardItem">
              <p className="date">2023</p>
              <p className="title">ICPC Problem Solving</p>
              <p className="subTitle">Participated in ICPC Contest and received certification</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
