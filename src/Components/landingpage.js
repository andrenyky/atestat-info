import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
	render(){
		return (
			<div style={{width:'100%',margin:'auto'}}> 
				<Grid className="landing-grid">
				<Cell col={12}>
					<img    
						src="https://avatars2.githubusercontent.com/u/46795046?s=460&v=4"
						alt="avatar"
						className="avatar-img"
					/>
					<div className="banner-text"> 
						<h1>Front End Web Developer</h1>
						<hr/>
						<p>HTML/CSS | Bootstrap | JavaScript | React </p>
						<div className="social-links">
							{/* LinkedIn */}
						<a href="htttp://google.com"  rel="noopener noreferrer" target="_blank">
							<i className="fa fa-linkedin-square" aria-hidden="true"/>
						</a>
						{/* GitHub */}
						<a href="https://google.com"  rel="noopener noreferrer" target="_blank">
							<i className="fa fa-github-square" aria-hidden="true"/>
						</a>
						</div>
					</div>
				</Cell>
				</Grid>
				
			</div>
			)
	}
}

export default Landing;