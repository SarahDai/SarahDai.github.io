import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var education = this.props.data.education.map(function(education){
         return <div className="education-div" key={education.school}>
                  <h3>{education.school}</h3>
                  <p className="edu">{education.degree}{" "} <span>&bull;</span>{" "}<em className="date">{education.graduated}</em></p>
               </div>
      });
      var work = this.props.data.work.map(function(work){
         return <div className="experience-div" key={work.company}>
                  <h3>{work.company}</h3>
                  <p className="experience">{work.title}{" "} <span>&bull;</span>{" "}<em className="date">{work.years}</em></p>
               </div>
      })
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Xinyu Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <div className="twelve columns bio-frame">
               <h1 className="title">Software Engineer X Data Scientist</h1>
               <p className="bio">I love to keep up with the fast pace of technological changes and various data driven applications. The process of training the data science models, building up pipelines to prepare and learn data from the real world is really fascinating for me. I look forward to accumulating experiences on developing high scalable services. </p>
            </div>
            <div className="twelve columns education-frame">
               <h1><span>Education</span></h1>
               {education}
            </div>
            <div className="twelve columns experience-frame">
               <h1><span>Work Experience</span></h1>
               {work}
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
