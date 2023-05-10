import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Rishit Yadav-PhotoRoom.png-PhotoRoom.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/github.svg";
import navIcon5 from "../assets/img/twitter.svg";
import navIcon6 from "../assets/img/phone.svg";
import navIcon7 from "../assets/img/email.svg";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rishit-yadav-a68027202/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/rishityadav02?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/rishit_yadav_?igshid=YmJhNjkzNzY" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://instagram.com/rishit_yadav_?igshid=YmJhNjkzNzY" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="Icon" /></a>
              <a href="https://twitter.com/Rishit_yadav_?t=u3Yp-NuX9nCjMhXNDwfVUA&s=09" target="_blank" rel="noopener noreferrer"><img src={navIcon5} alt="Icon" /></a>
              <a href="tel:8090151012" target="_blank" rel="noopener noreferrer"><img src={navIcon6} alt="Icon" /></a>
              <a href="mailto:rishityadav2002@gmail.com" target="_blank" rel="noopener noreferrer"><img src={navIcon7} alt="Icon" /></a>

            </div>

            <p>Copyright 2023. All Rights Reserved by Rishit Yadav</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
