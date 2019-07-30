import React, {Component} from "react";
import Stories from "../Stories/Stories";

class Donor extends Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    return(
      <div>
        <h2>Donor</h2>
        <Stories/>
      </div>
    )
  }
}

export default Donor;