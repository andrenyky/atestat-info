import React, {Component} from 'react';
import {Tabs,Tab, Grid, Cell, Card, CardText,CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component{
	constructor(props) {
		super(props);
		this.state= {
			activeTab:0
		};
	}
toggleCategories() {
	if(this.state.activeTab === 0){
	return(
		<div className="projects-grid">
			{/*Project 1*/}
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height: '176px', background:'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center/cover'}}>
				React Project #1;
			</CardTitle>
			<CardText>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</CardText>
			<CardActions border> 
				<Button colored>GitHub</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
				<IconButton name="share" />
			</CardMenu>
		</Card>
		{/*Project 2*/}
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height: '176px', background:'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center/cover'}}>
				React Project #2;
			</CardTitle>
			<CardText>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</CardText>
			<CardActions border> 
				<Button colored>GitHub</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
				<IconButton name="share" />
			</CardMenu>
		</Card>
		
		{/*Project 3*/}
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height: '176px', background:'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center/cover'}}>
				React Project #3;
			</CardTitle>
			<CardText>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</CardText>
			<CardActions border> 
				<Button colored>GitHub</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
				<IconButton name="share" />
			</CardMenu>
		</Card>
		</div>
		
		
		)
}
	else if(this.state.activeTab ===1){
		return(
			<div className="projects-grid">
			{/*Project 1*/}
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height: '176px', background:'url(https://img-a.udemycdn.com/course/750x422/913448_e6e2.jpg) center/cover'}}>
				Python Project #1;
			</CardTitle>
			<CardText>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</CardText>
			<CardActions border> 
				<Button colored>GitHub</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
				<IconButton name="share" />
			</CardMenu>
		</Card>
		{/*Project 2*/}
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height: '176px', background:'url(https://img-a.udemycdn.com/course/750x422/913448_e6e2.jpg) center/cover'}}>
				Python Project#2;
			</CardTitle>
			<CardText>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</CardText>
			<CardActions border> 
				<Button colored>GitHub</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
				<IconButton name="share" />
			</CardMenu>
		</Card>
		
		{/*Project 3*/}
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height: '176px', background:'url(https://img-a.udemycdn.com/course/750x422/913448_e6e2.jpg) center/cover'}}>
				Python Project #3;
			</CardTitle>
			<CardText>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</CardText>
			<CardActions border> 
				<Button colored>GitHub</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
				<IconButton name="share" />
			</CardMenu>
		</Card>
		</div>
			)
	}
	else if(this.state.activeTab ===2){
		return(
			<div className="projects-grid">
			{/*Project 1*/}
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height: '176px', background:'url(https://azimutvision.ro/wp-content/uploads/2014/08/curs-online-javascript.jpg) center/cover'}}>
				JS Project #1;
			</CardTitle>
			<CardText>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</CardText>
			<CardActions border> 
				<Button colored>GitHub</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
				<IconButton name="share" />
			</CardMenu>
		</Card>
		{/*Project 2*/}
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height: '176px', background:'url(https://azimutvision.ro/wp-content/uploads/2014/08/curs-online-javascript.jpg) center/cover'}}>
				JS Project #2;
			</CardTitle>
			<CardText>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</CardText>
			<CardActions border> 
				<Button colored>GitHub</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
				<IconButton name="share" />
			</CardMenu>
		</Card>
		
		{/*Project 3*/}
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height: '176px', background:'url(https://azimutvision.ro/wp-content/uploads/2014/08/curs-online-javascript.jpg) center/cover'}}>
				JS Project #3;
			</CardTitle>
			<CardText>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</CardText>
			<CardActions border> 
				<Button colored>GitHub</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
				<IconButton name="share" />
			</CardMenu>
		</Card>
		</div>
			)
	}
	else if(this.state.activeTab ===3){
		return(
			<div className="projects-grid">
			{/*Project 1*/}
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height: '176px', background:'url(https://codingwithbasir.com/wp-content/uploads/2020/03/learn-htmlcss-dark.png) center/cover'}}>
				HTML+CSS Project #1;
			</CardTitle>
			<CardText>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</CardText>
			<CardActions border> 
				<Button colored>GitHub</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
				<IconButton name="share" />
			</CardMenu>
		</Card>
		{/*Project 2*/}
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height: '176px', background:'url(https://codingwithbasir.com/wp-content/uploads/2020/03/learn-htmlcss-dark.png) center/cover'}}>
				HTML+CSS Project #2;
			</CardTitle>
			<CardText>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</CardText>
			<CardActions border> 
				<Button colored>GitHub</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
				<IconButton name="share" />
			</CardMenu>
		</Card>
		
		{/*Project 3*/}
		<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
			<CardTitle style={{color: '#fff', height: '176px', background:'url(https://codingwithbasir.com/wp-content/uploads/2020/03/learn-htmlcss-dark.png) center/cover'}}>
				HTML+CSS Project #3;
			</CardTitle>
			<CardText>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</CardText>
			<CardActions border> 
				<Button colored>GitHub</Button>
				<Button colored>CodePen</Button>
				<Button colored>LiveDemo</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
				<IconButton name="share" />
			</CardMenu>
		</Card>
		</div>
			)
	}
}


	render(){
		return (
			<div className="category-tabs">
			<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
			<Tab>React</Tab>
			<Tab>Python</Tab>
			<Tab>JavaScript</Tab>
			<Tab>HTML+CSS</Tab>
			</Tabs>

			
				<Grid >
				<Cell col={12}>
				<div className="content">{this.toggleCategories()}</div>
				</Cell>
				</Grid>
			 
			
			</div>
			)
	}
}

export default Projects;