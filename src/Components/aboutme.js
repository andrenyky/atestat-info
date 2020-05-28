import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class About extends Component{
	render(){
		return (
		  <Grid>
		  <Cell className="aboutme-image" col={4}> 
				<img 
		  		src="https://vignette.wikia.nocookie.net/springtimeofyouth/images/5/59/Sasuke_Uchiha_%28Ep._47%29.png/revision/latest/scale-to-width-down/300?cb=20130726072717"
		  		alt="Anime-Sasuke"
		  		style={{height:'250px'}} 
		  		/>

		  </Cell>
		  	<Cell className="aboutme-styling" col={4}> 
		  	<h1>About Me</h1>

		  	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
		  	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
		  	when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
		  	It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
		  	essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
		  	Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
		  	versions of Lorem Ipsum. </p>
		  	
		  	</Cell>
		  	<Cell className="aboutme-image"  col={4}> 
		  		<img 
		  		src="https://vignette.wikia.nocookie.net/springtimeofyouth/images/d/d4/Itachi_Avatar.png/revision/latest/scale-to-width-down/340?cb=20140605031549"
		  		alt="Anime-Itachi"
		  		style={{height:'250px'}} 
		  		/>

		  	</Cell>
		  </Grid>
			)
	}
}

export default About;