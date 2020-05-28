import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component{
	render(){
		return (
			<div className="contact-body"> 
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Name of person</h2>
						<img   
							src="https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-morpheus-512.png"
							alt="avatar"
							style={{height:'250px'}}
						/>
						<p style={{width: '75%', margin: 'auto', paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
					</Cell>
					<Cell col={6}>
						<h2>Contact me</h2>
						<hr/>
<div className="contact-list">
<List>
  <ListItem>
    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
    <i className="fa fa-phone-square" aria-hidden="true" />
            phone number
    </ListItemContent>
  </ListItem>
    <ListItem>
    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
    <i className="fa fa-envelope" aria-hidden="true" />
            example@yahoo.com
    </ListItemContent>
  </ListItem>
    <ListItem>
    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
    <i className="fa fa-skype" aria-hidden="true" />
            skype.user
    </ListItemContent>
  </ListItem>
 
</List>		
</div>
					</Cell>
				</Grid>
			</div>
			)
	}
}

export default Contact;