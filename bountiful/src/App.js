import React,{Component} from 'react';
import './App.scss';
import axios from "axios";
import Home from "./components/Home/Home";
// import Donors from "./components/Donors/Donor";
import Coordinators from "./components/Coordinators/Coordinators";
import Stories from "./components/Stories/Stories";
// import StoriesForm from "./components/Stories/StoriesForm";
// import StoriesList from "./components/Stories/StoriesList"
import { 
  Container, 
  Row, 
  Col,
  Nav,
  NavItem,
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
              <h1>Bountiful App</h1>
              <Nav className="nav">
                <NavItem className="navItem">                
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem className="navItem"> 
                <Link to="/donors">Donors</Link>
                </NavItem>
                <NavItem className="navItem"> 
                <Link to="/coordinators">Coordinators</Link>
                </NavItem>
              </Nav>
              <Route path="/" exact render={(props) => <Home {...props} stories={stories} />}/>
              <Route path="/donors" exact render={(props) => <Stories {...props} stories={Stories} />}/>
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
