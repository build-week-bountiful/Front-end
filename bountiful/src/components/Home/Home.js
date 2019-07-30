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
import axios from "axios";

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      country: "",
      email: "",
      title: "",
      errorMessage: null,
    }
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createrUser = e => {
    e.preventDefault()
    
    const {username, password, firstname, lastname, country, email, title} = this.state
    const payload = {username, password, firstname, lastname, country, email, title}
    
    axios
    .post("http://coordinator-storytelling.herokuapp.com/createnewuser",payload)
  .then((res) => {
    console.log("success", res)
    this.setState({
      errorMessage: null
    })
    .catch((err)=> {
      this.setState({
        errorMessage: err.res.data.error
      })
    })
  })
}

  render(){
    const {username, password, firstname, lastname, country, email, title, errorMessage } = this.state
    return(
      <div className="container">
        <Row>
        {/* <h1>Home</h1> */}
          <Col xs="6" className="form-container sign-up-container">
            {/* sign up form code goes here */}
            <h3>Create Account</h3>
            <p>{errorMessage}</p>
            <Form onSubmit={this.createrUser}>
              <FormGroup>
                <Input
                  type="username"
                  name="username"
                  placeholder="User Name"
                  defaultValue={username}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  defaultValue={password}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="firstname"
                  name="firstname"
                  placeholder="First Name"
                  defaultValue={firstname}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  defaultValue={lastname}
                />
              </FormGroup>
              <FormGroup>
              <Input type="select" name="select" id="country" defaultValue={country}>
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
                  type="email"
                  name="email"
                  placeholder="Email"
                  defaultValue={email}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="title"
                  name="title"
                  placeholder="Title within Organization"
                  defaultValue={title}
                />
              </FormGroup>
              
              <Button onClick={this.createrUser}>Sign Up</Button>
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