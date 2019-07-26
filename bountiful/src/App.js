import React,{Component} from 'react';
import './App.css';
import StoriesForm from "./components/Stories/StoriesForm";
import { 
  Container, 
  Row, 
  Col,

} from 'reactstrap';

class App extends Component {
  render(){
      return (
        <Container
         className="App"
         >
        <Row>
          <Col>
            <h1>Bountiful App</h1>
              <div>
                <StoriesForm/>
              </div>
          </Col>
        </Row>
      </Container>
    );
}
}

export default App;
