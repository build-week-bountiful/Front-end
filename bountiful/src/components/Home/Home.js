import React, {Component} from "react";
import { 
  Button, 
  Form, 
  FormGroup, 
  // Label,
  Col,
  Row, 
  Input, 
  // FormText, 
} from 'reactstrap';
import "./Home.scss"

class Home extends Component{
  constructor(props){
    super();
  }
  

  render(){
    return(
      <div className="container">
        <Row>
        {/* <h1>Home</h1> */}
          <Col xs="6" className="form-container sign-up-container">
            {/* sign up form code goes here */}
            <h3>Create Account</h3>
            <Form>
              <FormGroup>
                <Input
                  type="name"
                  name="name"
                  placeholder="Name"
                />
              </FormGroup>
              <FormGroup>
              <Input type="select" name="select" id="country">
                <option>Country</option>
                <option>Bolivia</option>
                <option>Brazil</option>
                <option>Cambodia</option>
                <option>Colombia</option>
                <option>Ecuador</option>
                <option>El Salvador</option>
                <option>Ghana</option>
                <option>Guatemala</option>
                <option>Haiti</option>
                <option>Honduras</option>
                <option>Kiribati</option>
                <option>Madagascar</option>
                <option>Mongolia</option>
                <option>Nicaragua</option>
                <option>Paraguay</option>
                <option>Peru</option>
                <option>Phillippines</option>
                <option>Sierra Leone</option>
                <option>Zimbabwe</option>
              </Input>
              </FormGroup>
              <FormGroup>
                <Input
                  type="title"
                  name="title"
                  placeholder="Title within Organization"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <Button>Sign Up</Button>
            </Form>

          </Col>
          <Col xs="6" className="form-container sign-in-container">
            {/* sign in form code goes here */}
            <h3>Sign In</h3>
            <Form>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <Button>Sign In</Button>
            </Form>
          </Col>
        </Row>
        </div>
    )
  }
}

export default Home;