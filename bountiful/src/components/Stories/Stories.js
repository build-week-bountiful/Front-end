import React from "react";
import {gettingStories} from "../Actions/index";
import {connect} from "react-redux";

class Stories extends React.Component{
  componentDidMount(){
    this.props.gettingStories();
  }

  render(){
    return(
      <div className="storiesContainer">
        <h2>Stories</h2>
      </div>
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

export default connect (mapStateProps, {gettingStories})(Stories);