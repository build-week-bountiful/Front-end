import React, {Component} from "react";
import StoriesForm from "../Stories/StoriesForm";
import {
  Container,

} from "reactstrap";

class Coordinators extends Component{
  render(){
    return(
      <Container>
        <h2>Coordinators</h2>
          <StoriesForm/>
      </Container>
    )
  }
}

export default Coordinators;