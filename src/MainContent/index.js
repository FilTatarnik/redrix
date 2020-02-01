import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Image } from 'react-bootstrap';
import { Link, animateScroll as Scroll } from 'react-scroll';
import './styles.css';

class MainContent extends Component {
    render(){
        return(
            <div>
            	<div>
            	<Jumbotron>
					<Image src="https://i.imgur.com/bpLlqWO.jpg" fluid />

                    <h3>Lolgistics Officer</h3>
                    <Image src="lolg.png" alt="image" id="lolg" />
                    <h3>Fat</h3>
                    <Image src="fat.png" alt="image" id="fat" />
                    <h3>Fish</h3>
                    <Image src="Fish.png" alt="image" id="fish" />

            	</Jumbotron>
            	</div>
            </div>
        )
    }
}
export default MainContent;
