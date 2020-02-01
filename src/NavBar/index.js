import React, { Component } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Navbar_Brand, Navbar_Toggle, NavDropdown, Navbar_Collapse, Nav, Nav_Link, NavDropdown_Item, Form, FormControl, Button} from 'react-bootstrap';
import { Link, animateScroll as Scroll } from 'react-scroll';


class NavBar extends Component {
    render(){
        return(
            <Navbar  expand="lg" className="mainnav">
			  <Navbar.Brand href="#home">Redrix Longsword</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link href="#home">Home</Nav.Link>
			      <Nav.Link href="#link">Team Videos</Nav.Link>
			      <NavDropdown title="Members" id="basic-nav-dropdown">

			        <NavDropdown.Item href="#action/3.1">
				        <Link 
				      		activeClass="active"
				      		to="lolg"
				      		spy={true}
				      		offset={-70}
				      		duration={1000}
					      >
					      	lolgisticsofficer
					    </Link>
			        
			        </NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.2">Karma</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.3">Kelryn</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.4">Daaammmnnn</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.5">Azel</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.6">Infernal</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.7">Steel Condor</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.8">
			        	<Link 
				      		activeClass="active"
				      		to="fat"
				      		spy={true}
				      		offset={-70}
				      		duration={1000}
					    >
				      		Fat
				      	</Link>
			        </NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.9">Compound</NavDropdown.Item>
			        <NavDropdown.Item href="#action/4.0">Archon</NavDropdown.Item>
			        <NavDropdown.Item href="#action/4.1">
				        <Link 
				      		activeClass="active"
				      		to="fish"
				      		spy={true}
				      		offset={-70}
				      		duration={1000}
					      >
					      	Profishional
					      </Link>
				      </NavDropdown.Item>
			        <NavDropdown.Divider />
			        <NavDropdown.Item href="#action/4.2">Join Us!</NavDropdown.Item>
			      </NavDropdown>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
        )
    }
}
export default NavBar;