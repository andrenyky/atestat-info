import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education.js';
import Experience from './Experience.js';
import Skills from './Skills.js'

class Resume extends Component{
	render(){
		return (
			<div> 
			 <Grid>
			 	<Cell co={4}>
			 	 <div style={{textAlign: 'center'}}>
			 	 	<img 
			 	 	 src="https://www.w3schools.com/howto/img_avatar.png"
			 	 	 alt="avatar"
			 	 	 style={{height:'200px'}}
			 	 	 />
			 	 </div>
			 	 <h2 style={{paddingTop: '2em'}}>Name of person </h2>
			 	 <h4 style={{color:'grey'}}>Aspiring programmer</h4>
			 	 <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
			 	 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			 	  </p>
			 	  <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
			 	  <h5> Address</h5>
			 	  <p> Address, zip code </p>
			 	  <h5> Phone </h5>
			 	  <p> +....... </p>
			 	  <h5> Email </h5>
			 	  <p> example@yahoo.com </p>
			 	  <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />

			 	</Cell>
			 	<Cell className="resume-right-col" col={8}>
			 		<h2> Education </h2>

			 		<Education 
			 			startYear={2016}
			 			endYear={2020}
			 			schoolName="My High School"
			 			schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."


			 		/>
			 		<hr style={{borderTop:'3px solid #322947'}}/>
			 		<h2> Experience </h2>
			 		<Experience 
			 			startYear={2020}
			 			endYear={2020}
			 			jobName="None yet"
			 			jobDescription="Nothing yet"
			 		/>
			 		<hr style={{borderTop:'3px solid #322947'}}/>
			 		<h2> Skills </h2>

			 		<Skills 
			 		skill="javascript"
			 		progress={60}
			 		/>
			 		<Skills
			 		skill="HTML/CSS"
			 		progress={80}
			 		/>
			 		<Skills
			 		skill="Python"
			 		progress={20}
			 		/>
			 		<Skills
			 		skill="React"
			 		progress={25}
			 		/>
			 	</Cell>

			 </Grid>
			</div>
			)
	}
}

export default Resume;