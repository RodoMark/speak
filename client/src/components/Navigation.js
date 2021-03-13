import {Navbar, Nav } from 'react-bootstrap'

function Navigation (props) {
  return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Parlar</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#profile">Profile</Nav.Link>
      <Nav.Link href="#auth">Authenticate/Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navigation