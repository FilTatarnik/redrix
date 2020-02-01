import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';
import './styles.css';


class Footer extends Component {
    render(){
        return(
            <div className="footerdiv">
            	<Jumbotron>This is the footer</Jumbotron>
            </div>
        )
    }
}
export default Footer;
