import React, { Component } from 'react'
import './estilo.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nutri: []
    }
  }

  async componentDidMount(){
    const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
    const reponse = await fetch(url)
    const apiNutri = await reponse.json()
    const state = this.state
    state.nutri = apiNutri
    this.setState(state)
  }

  render(){
    return(
      <div className="container">

        <header>
          <strong>React Nutri</strong>
        </header>

        {this.state.nutri.map((item)=>{
          return(
            <article className="post" key={item.id}>
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} className="capa"/>
              <p className="subtitulo">{item.subtitulo}</p>
              <a className="btn">Acessar</a>
            </article>
          )
        })}
      </div>
    )
  }
}