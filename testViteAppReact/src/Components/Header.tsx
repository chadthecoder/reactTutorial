import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
        return  (
    <header>
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <NavDropdown title="Resumes" id="nav-dropdown">
        <NavDropdown.Item href="/resume">PDF Resume</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="files/Resume.docx">DOCX Resume</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Nav.Link href="/resume">Game</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/resume">Portfolio</Nav.Link>
      </Nav.Item>
    </Nav>
    </header>
    );
  }

  export default Header