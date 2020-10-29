import React, { Component } from 'react'

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
        
      </div>
    )
  }
}