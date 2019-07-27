import React,{Component} from 'react';
import './App.css';
import axios from "axios";
import Home from "./components/Home";
import Donors from "./components/Donors/Donor";
import Coordinators from "./components/Coordinators/Coordinators";
// import Stories from "./components/Stories/Stories";
// import StoriesForm from "./components/Stories/StoriesForm";
import { 
  Container, 
  Row, 
  Col,

} from 'reactstrap';

import {
  Link,
  Route
} from "react-router-dom"

class App extends Component {
  constructor(){
    super()
    this.state ={
      stories: []
    }
  }

  componentDidMount(){
    axios.get("http://coordinator-storytelling.herokuapp.com/stories/all")
    .then(res => {
      this.setState({
        stories: res.data
      })
    })
    .catch(err =>{
      console.log("error", err)
    })
  }

  updateStories = (stories) => {
    this.setState({stories})
  }

  render(){
    const {stories} = this.state
      return (
        <Container
         className="App"
         >
        <Row>
          <Col>
              <div className="navLinks">
              <h1>Bountiful App</h1>
                <Link to="/">Home</Link>
                <Link to="/donors">Donors</Link>
                <Link to="/coordinators">Coordinators</Link>
              </div>
              <Route path="/" exact render={(props) => <Home {...props} stories={stories} />}/>
              <Route path="/donors" exact render={(props) => <Donors {...props} stories={stories} />}/>
              <Route path="/coordinators" exact render={(props) => <Coordinators {...props} stories={stories} />}/>
              <div>
                {/* <Stories/> */}
                {/* <StoriesForm/> */}
              </div>
          </Col>
        </Row>
      </Container>
    );
}
}

export default App;
