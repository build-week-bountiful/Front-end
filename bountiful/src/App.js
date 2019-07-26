import React,{Component} from 'react';
import './App.css';
import Stories from "./components/Stories/Stories";
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
                <Stories/>
                <StoriesForm/>
              </div>
          </Col>
        </Row>
      </Container>
    );
}
}

export default App;
