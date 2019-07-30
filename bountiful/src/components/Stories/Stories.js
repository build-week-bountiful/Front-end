import React from "react";
// import {getStories} from "../Actions/index";
// import {connect} from "react-redux";
import { 
  Container, 
  // Row, 
  // Col,
  Card,
  // CardImg,
  CardText, 
  CardBody,
  CardTitle, 
  // CardSubtitle, 
  Button

} from 'reactstrap';
import "./stories.scss";

class Stories extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      stories: [],
      showInfo: false,
    }

    this.handleInfo = () => {
      this.setState({
        showInfo: !this.state.showInfo
      });
    }
  }

removeStories = () => {
  const stories = this.state.stories.filer(i=> i.id !== stories.id)
  this.setState({stories})
}

 componentDidMount(){
   fetch("http://coordinator-storytelling.herokuapp.com/stories/all")
   .then(res => res.json())
   .then(stories => this.setState({stories}))
 }

  render(){
    const {removeStories} = this.state;
    // console.log(this.state)
    return(
        <Container className="storiesContainer">
        <h2>Stories</h2>
        <div>
          {this.state.stories.map(stories => {
            return(
              <Card className="card">
              <CardBody>
              <CardTitle>
                <p><span className="bold">Title:</span>{stories.title}</p>
              </CardTitle>

              <CardText>
                <p><span className="bold">Date:</span> {stories.date}</p>
                <p><span className="bold">Country:</span> {stories.country}</p>
                <p><span className="bold">Description:</span> {stories.description}</p>
                <p>{" "}<span onClick={this.handleInfo}><span className="bold">More Info:</span> <i className="fas fa-caret-square-down"></i></span></p>
                {this.state.showInfo && <p>{stories.content}</p>}
              </CardText>
              <div className="storyBtns">
              <Button>Edit</Button>
              <Button onClick={() => removeStories(stories.date)}>Delete</Button>
              </div>
              </CardBody>
              </Card>
            )
          })}
        </div>  
      </Container>
    )
  }
}

export default Stories;