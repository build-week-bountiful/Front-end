import React from "react";
import {getStories} from "../Actions/index";
import {connect} from "react-redux";
import { 
  Container, 
  Row, 
  Col,

} from 'reactstrap';
class Stories extends React.Component{
  constructor(props){
    super()
  }

  componentDidMount(){
    this.props.getStories();
  }

  render(){
    return(
      <Container className="storiesContainer">
      <Row>
        <Col>
          <h2>Stories</h2>
        </Col>
      </Row>
      <Row>
        <Col>{stories.title}</Col>
        <Col>{stories.date}</Col>
        <Col>{stories.country}</Col>
        <Col>{stories.description}</Col>
      </Row>
        
      </Container>
    )
  }
}

const mapStateProps = state => {
   console.log("mapStateProps", state)
  return{
    stories: state.stories,
    fetchingStories: state.fetchingStories
  }
}

export default connect (mapStateProps, {getStories})(Stories);