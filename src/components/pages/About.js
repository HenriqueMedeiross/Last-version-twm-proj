import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>Somos a solução para seus problemas de comunicação e administração dentro de seu condomínio, centralizamos tudo em um aplicativo só</h1>
                <Form>
                    <Row>
                        <Col><h4>
                            Com o condomee, você consegue agendar eventos, realizar denuncias no caso de algum condômino infringir as regras do condomínio
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div>
                                <Row>
                                    <Col>Além disto, também temos um feed no qual você consegue postar sobre acontecimentos dentro de seu condomínio<br/> </Col>
                                    <Col><img src = "https://github.com/HenriqueMedeiross/ImgRepo/blob/main/CondoPhone1.png?raw=true"/></Col>
                                    
                                </Row>
                            </div>
                            </h4></Col>
                        
                        <Col><img width='260px' height='554px' src="https://github.com/HenriqueMedeiross/ImgRepo/blob/main/CondoPhone.png?raw=true"/></Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
