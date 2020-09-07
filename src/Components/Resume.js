import React, { Component } from 'react';

class Resume extends Component {
  render() {

    return (
      <section id="resume">

          <div className="row skill">
          <h1 className="project-header">Projects</h1>
          <hr />

          <div className="twelve columns main-col project-content">
            <h1><span>Minesweep!</span></h1>
            <h5>React Based Web Application</h5>

            <div key="minesweeper" className="columns portfolio-item">
              <div>
                <a href="https://minesweeper-7580.herokuapp.com" title="minesweeper homepage">
                  <img className="project-img" alt="minesweep screenshot" src="images/tech/minesweeper.jpg" />
                  <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Minesweep</h5>
                        <p>A react based online two-player minesweep game.</p>
                      </div>
                  </div>
                  <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>
            </div>

            <div className="twelve columns project-bullet">
            <li>Built an online minesweeper gaming web application with <span>React</span>, <span>Redux</span> and <span>Node.js</span>, deployed to <span>Heroku</span>.</li>
            <li>Designed the Minesweeper Game interactive UI using React, integrated with <span>Redux</span> for state management.</li>
            <li>Utilized <span>socket.io</span> for WebSocket based real-time multiplayer gaming, invitation and system notification scenarios.</li>
            <li>Established RESTful backend service with <span>Express.js</span>, leveraging <span>Firebase</span> to maintain data consistently.</li>
            <li>Completed full unit tests and integration tests to provide great game quality and well-defined user experiences.</li>
            <li>Source code: <a alt="minesweeper source code" href="https://github.com/SarahDai/Minesweeper" >Minesweeper Github Repo</a></li>
            </div>
          </div>


          <div className="twelve columns main-col project-content">
            <h1><span>Movie Finder</span></h1>
            <h5>C/C++ Based Search Engine</h5>
            <img className="project-img" alt="movie finder screenshot" src="images/tech/movie.jpg" />
            <div className="twelve columns project-bullet">
            <li>Built a file index system using Doubly Linked List, Hash table and Inverted Index in <span>C</span> for movie searching.</li>
            <li>Optimized search-oriented database to support efficient query, insert, and update operations in 5 million records.</li>
            <li>Implemented multi-threading file parsing with <span>pthreads</span> and <span>mutex</span> to handle races and reduce 15% startup time.</li>
            <li>Created multiprocessing web servers via <span>socket</span> to support concurrent connections clients scenario for great usage.</li>
            <li>This is a course project, please feel free to reach out for the source code. <a alt="partial moview finder code" href="https://github.com/SarahDai/MovieFinder" >Partial code</a> can be found here.</li>
            </div>
          </div>

          <div className="twelve columns main-col project-content">
            <h1><span>Service Alert Management Application</span></h1>
            <h5>Azure Based Cloud Service</h5>
            
            <div className="twelve columns project-bullet">
            <li>Built up scalable service alert management app to facilitate alert control, correlation, noise reduction visually.</li>
            <li>Leveraged <span>Azure Service Fabric</span> to simplify microservices development and application lifecycle management.</li>
            <li>Constructed graphical scope-based hierarchy on machines using Gremlin api provided by <span>Azure Cosmos DB</span>.</li>
            <li>Designed and implemented configurable throttling feature for <span>dynamic alert suppression</span> on top of graph database.</li>
            <li>Provided a configurable mechanism which makes easily onboarding services to set up data driven suppressions without code change and deployment in production.</li>
            </div>
          </div>

          <div className="twelve columns main-col project-content">
            <h1><span>Easy-To-Use Computational Tool</span></h1>
            <h5>Graduate Qualifying Project with WPI and Pfizer</h5>
            <img className="project-img" alt="integration screenshot" src="images/tech/integration.jpg" />
            <div className="twelve columns project-bullet">
            <li>Integrated simulation engine <span>Aspen Properties</span> with data analysis and reporting environment <span>Pipeline Pilot</span>.</li>
            <li>Automated simulation calculation, data transfer and visualization using UNIX shell scripting and PilotScript.</li>
            <li>Provided easy-to-use predictive tool that accelerates experimental chemical reactions from 20 mins to 10 seconds.</li>
            <li>Project Demo: <a href="https://www.youtube.com/watch?v=1fwgDTuhXas" title="gqp project demo">Pfizer Demo</a></li>
            </div>
          </div>

          <div className="twelve columns main-col project-content">
            <h1><span>Dallas Crime Map</span></h1>
            <h5>d3.js Based Interactive Data Visualization</h5>
            <div id="video" >
              <iframe title="map vedio" width="500" height="315" src="https://www.youtube.com/embed/tW5l99M5pOM?autoplay=0" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="twelve columns project-bullet">
            <li>Developed an interactive Online Crime Map to reflect the residential safety within the City of Dallas for customers.</li>
            <li>Analyzed Dallas incidents in <span>Python</span> and visualized crime information using <span>JavaScript</span>, <span>D3.js</span>, <span>HTML</span>, <span>CSS</span>.</li>
            <li>Provided street-level crime index in multiple granularity and customized neighborhood-safety search for map users.</li>
            </div>
          </div>


          <div className="twelve columns main-col project-content">
            <h1><span>Data Transfer Acceleration</span></h1>
            <h5>Vertica to HDFS</h5>
            
            <div className="twelve columns project-bullet">
            <li>Built high-speed data transferring service between <span>Apache Hadoop</span> and relational distributed database <span>Vertica</span>.</li>
            <li>Fulfilled load-balanced data transfer between Apache Hadoop and Vertica using <span>Yarn</span> and <span>UNIX shell scripting</span>.</li>
            <li>Optimized existing enterprise data transfer framework and sped up data transfer process by 10 times on average.</li>
            </div>
          </div>




      </div>
   </section>
    );
  }
}

export default Resume;
