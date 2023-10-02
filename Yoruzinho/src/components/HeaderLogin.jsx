import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import LogoHeader from "../assets/LogoHeader.png";


const HeaderLogin = () => {
  return (
    <Navbar  bg="dark" variant="dark" expand="lg" >
    <Container>
      <Navbar.Brand >
      <img
            src={LogoHeader}
            height="30"
            className="d-inline-block align-top"
            alt="PHARMACY CENTRAL SYSTEM"
          />
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default HeaderLogin