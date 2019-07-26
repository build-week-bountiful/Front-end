import React from "react";
import {connect} from "react-redux";
import {createStories, } from "../Actions/index";

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
        <form onSubmit={this.addStories}>
          <input
            name="title"
            onChange={this.handleChange}
            type="title"
            placeholder="title"
            value={this.state.title}/><br/>
          <input
            name="country"
            onChange={this.handleChange}
            type="country"
            placeholder="country"
            value={this.state.country}/><br/>
          <input
            name="description"
            onChange={this.handleChange}
            type="description"
            placeholder="description"
            value={this.state.description}/><br/>
          <input
            name="date"
            onChange={this.handleChange}
            type="date"
            placeholder="date"
            value={this.state.date}/><br/>

            <button value = "submit">Add To Stories</button>
        </form>
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