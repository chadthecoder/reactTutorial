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

  let names = props.menu.split(',');

  //let ans = names[0];
  //console.log(ans);

//let names = props.menu;
//console.log(typeof names);
//let ans = names.split(",");
//console.log(names);
//let ans = names;


        return  (
          <>
    <header>
    <Nav variant="pills" defaultActiveKey="/home">
      {names.map((link) =>{
        console.log(link);
        let linkArr = link.split('.');
        console.log(linkArr[0]);
        if(linkArr.length <= 2)
        {
          return (<Nav.Item><Nav.Link href={linkArr[1]}>{linkArr[0]}</Nav.Link></Nav.Item>);
        }
        else
        {
          for(i=0; i<linkArr.length; i++)
          {
            return
            (
              <NavDropdown title="Resumes" id="nav-dropdown">
              <NavDropdown.Item href="/resume">PDF Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>DOCX Resume (Download)</NavDropdown.Item>
              </NavDropdown>
            );
          }
        }
        
      })}
      <Nav.Item>
        <Nav.Link href="/">{props.menu}</Nav.Link>
      </Nav.Item>
      <NavDropdown title="Resumes" id="nav-dropdown">
        <NavDropdown.Item href="/resume">PDF Resume</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>DOCX Resume (Download)</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Nav.Link href="/resume">Game</Nav.Link>
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