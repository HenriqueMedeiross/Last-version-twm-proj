import React, { Component } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";

export default class LogIn extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: ""
        };
      }
   
    setEmail = (e)=>{
      this.setState({email: e});
    }
    setPassword = (e)=>{
      this.setState({password: e});
    }

    render() {
    return (
      <div>
        <Container>
          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  value = {this.email}
                  onChange={(e)=>this.setEmail(e.target.value)}
                  type="e-mail"
                  placeholder="Enter your e-mail"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control 
                value = {this.password}
                type="password" 
                placeholder="Password" 
                onChange={(e)=>this.setPassword(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Button onClick={()=>console.log(this.email,this.password)}>Login</Button>
          </Form>
        </Container>
      </div>
    );
  }
}
