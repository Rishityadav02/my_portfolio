import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/klkr.png";
import projImg2 from "../assets/img/shec.png";
import projImg3 from "../assets/img/port.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "KalaKAAR",
      description: "Front-End Project",
      imgUrl: projImg1,
      link:"https://devfolio.co/projects/kalakaar-181c",
    },
    {
      title: "She Commerce",
      description: "Front-End Project",
      imgUrl: projImg2,
      link:"https://devfolio.co/projects/shecommerce-ba83",
    },
    {
      title: "Portfolio Website",
      description: "Front-End Project",
      imgUrl: projImg3,
      link:"#",
    },
  ]
    const UiUx = [
     {
       title: "Business Startup",
       description: "Design & Development",
       imgUrl: projImg1,
     },
     {
       title: "Business Startup",
       description: "Design & Development",
       imgUrl: projImg2,
     },
     {
       title: "Business Startup",
       description: "Design & Development",
       imgUrl: projImg3,
     },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects & Certifications</h2>
                <p>Below are Some of the projects which I have made and the certifications which I have got till now!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Front-End Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">UI/UX & Graphics Design Projects</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Graphics Design Projects</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Here are the posters of some of my Front-End projects, To view the full project kindlt visit my 
                      <a style={{textDecoration: 'none'}} href="https://github.com/Rishityadav02" target="_blank" rel="noopener noreferrer" id="dog"> GitHub Account</a></p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                      {
                          UiUx.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
