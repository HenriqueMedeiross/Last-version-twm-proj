import React, { Component } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            complexId: ""
        };
    }

    setFirstName = (e)=>{
        this.setState({firstName:e})
    }
    setLastName = (e)=>{
        this.setState({lastName:e})
    }
    setEmail = (e)=>{
        this.setState({email:e})
    }
    setPassword = (e)=>{
        this.setState({password:e})
    }
    setComplexId = (e)=>{
        this.setState({complexId:e})
    }


    showVal = ()=>{
        console.log(this.state.firstName)
        console.log(this.state.lastName)
        console.log(this.state.email)
        console.log(this.state.password)
        console.log(this.state.complexId)

    }

    render() {
        return (
            <Container style={{ marginTop: '40px' }}>
                <Form>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="First name" value={this.firstName} onChange={e=>this.setFirstName(e.target.value)}/>
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" value={this.lastName} onChange={e=>this.setLastName(e.target.value)}/>
                            </Col>
                        </Row>
                    </Form>
                    <Row>
                        <Form.Group as={Col} controlId="formGridEmail" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={this.email} onChange={e=>this.setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={this.password} onChange={e=>this.setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group >
                        <Form.Label>Complex ID</Form.Label>
                        <Form.Control placeholder="Id from your building" value={this.complexId} onChange={e=>this.setComplexId(e.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" onClick={this.showVal}>
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}
