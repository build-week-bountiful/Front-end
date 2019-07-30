import React from "react";
import { connect } from "react-redux";
import Stories from "./Stories";
// import getStories from "../Actions/index";

function StoriesList(props){
  const {getStories, stories,} = props
  if (getStories){
    return<p>....Loading</p>
  }
  return(
    <div>
      {this.props.stories.map((story, index)=> {
        return(
          <Stories key={index} storiesid={story.storiesid} country={story.country} title={story.title} description={story.description} date={story.date} />
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    stories: state.stories,
    getStories: state.getStories,
    error: state.err
  }
}

export default connect(mapStateToProps)(StoriesList);