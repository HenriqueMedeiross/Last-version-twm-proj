import React, { Component } from 'react'
import Link from 'react-bootstrap'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Bem vindo ao Condomee</h1>
                <h3>O aplicativo que visa facilitar sua experiência dentro de seu condominio</h3>
                <div>IMAGEM DE FUNDO</div>
                
                <button onClick={()=>window.location.href="/login"}>Login</button>
                <button onClick={()=>window.location.href="/signin/resident"}>Sign-In</button>

                <div>Se voce é o sindico de seu condominio e deseja cadastra-lo:</div>
                <button onClick={()=>window.location.href="/signin/complex-manager"}>Sign-In new Complex</button>
            </div>
        )
    }
}
