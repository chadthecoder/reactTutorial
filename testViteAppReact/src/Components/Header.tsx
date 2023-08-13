import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLinkClickHandler } from 'react-router-dom';

//figure out loop render in tsx/react?

/*function renderStuff(names)
{
  for(let i = 0; i < names.length; i++)
        {
          let test = names[i].split('.');
          if(test.length == 2 )
          {
            return (<Nav.Item><Nav.Link href={test[1]}>{test[2]}</Nav.Link></Nav.Item>);
          }
          else
          {
      
          }
        }
}*/

function Header(props) {

  //tried to make customizable header, could not figure out dropdown menu yet
  //let names = props.menu.split(',');


        return  (
          <>
    <header>
    <Nav variant="pills" defaultActiveKey="/home">
      {/* part 2 of dropdown issue
      {names.map((link) => { 
        //console.log(link);
        const linkArr = link.split('.');
        //console.log(linkArr[0]);
        if(linkArr.length <= 2)
        {
          return (<Nav.Item><Nav.Link href={linkArr[1]}>{linkArr[0]}</Nav.Link></Nav.Item>);
        }
      }
)}*/}
        
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <NavDropdown title="Resumes" id="nav-dropdown">
        <NavDropdown.Item href="/resume">PDF Resume</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href='/resume'>DOCX Resume (Download)</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Nav.Link href="/game">Game</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/resume">Portfolio</Nav.Link>
      </Nav.Item>
    </Nav>
    </header>
    </>
    );
  }

  export default Header