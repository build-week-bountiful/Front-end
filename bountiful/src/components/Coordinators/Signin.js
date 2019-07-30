import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {signin} from "./Actions";
import {
        Form,
        FormGroup,
        Input,
        Button,
        Col,
} from "reactstrap";

class Signin extends React.Component{
  constructor(){
    super()
    this.state = {
      email: "",
      password: "",
    }
  }

handleChange = (e) => {
  e.preventDefault()
 
  this.setState({
    [e.target.name]: e.target.value,
  })
}

handleSubmit = (e) => {
  e.preventDefault()

  const {email, password} = this.state
  this.props.signin(email, password)
  .then(() => {
    this.props.history.push("/")
  })
  .catch((err) => {
    console.log(err)
  })
}

render(){
  const {email, password} = this.state
  const {isLoading, errorMessage} = this.props

  return(
    <Col xs="6" className="form-container sign-in-container">
    {/* sign in form code goes here */}
    <h3>Sign In</h3>
    <Form onSubmit={this.handleSubmit}>
    {errorMessage && <p className="error">{errorMessage}</p>}
      <FormGroup>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={email}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={password}
        />
      </FormGroup>
      {isLoading
        ? <p>Logging in...</p>
        : <Button>Sign In</Button>
      }
    </Form>
  </Col>
  )
}

}
const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	errorMessage: state.errorMessage,
})

const mapDispatchToProps = {
	signin,
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Signin)
)