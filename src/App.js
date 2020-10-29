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
      <div>
        {this.state.nutri.map((item)=>{
          return(
            <artile className="container" key={item.id}>
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} className="capa"/>
              <p className="subtitulo">{item.subtitulo}</p>
              <a className="btn"></a>
            </artile>
          )
        })}
      </div>
    )
  }
}