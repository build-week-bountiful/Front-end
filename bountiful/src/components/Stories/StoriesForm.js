import React from "react";
import {connect} from "react-redux";
import {createStories, } from "../Actions/index";
import {
   Col, 
   Form, 
   FormGroup, 
   Label, 
   Input, 
   Button,
  
  } from 'reactstrap';

class StoriesForm extends React.Component{
  state = {
    title: "",
    country: "",
    description: "",
    date: "",
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  addStories = e => {
    e.preventDefault()
    const { title, country, description, date } = this.state
    this.props.createStories({title, country, description, date})
    this.setState({title: "", country: "", description: "", date: "",})
  }

  render(){

    return(
      <div>
        <Form onSubmit={this.addStories}>
          <FormGroup row>
          <Label for="title" sm={2} size="lg">Title</Label>
          <Col sm={10}>
          <Input
            name="title"
            onChange={this.handleChange}
            type="title"
            placeholder="title"
            bsSize="lg"
            value={this.state.title}/>
          </Col>
          </FormGroup>
          <FormGroup row>
          <Label for="date" sm={2} size="lg">Date</Label>
          <Col sm={10}>

          <Input
            name="date"
            onChange={this.handleChange}
            type="date"
            placeholder="date"
            value={this.state.date}/>
          </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="country" sm={2} size="lg">Country</Label>
          <Col sm={10}>

          <Input
            name="country"
            onChange={this.handleChange}
            type="country"
            placeholder="country"
            value={this.state.country}/>
          </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="description" sm={2} size="lg">Description</Label>
          <Col sm={10}>

          <Input
            name="description"
            onChange={this.handleChange}
            type="textarea"
            placeholder="description"
            value={this.state.description}/>
          </Col>
          </FormGroup>

          <Button 
            color="warning"
          >Add To Stories</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    stories: state.stories,
    fetchingStories: state.fetchingStories,
    error: state.error,
    addingStories: state.addingStories
  }
}

export default connect (mapStateToProps, {createStories})(StoriesForm);