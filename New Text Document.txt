import React from "react"

export default class ExampleForOne extends React.Component {
  state = {
    name: 'Armine',
    status: 'Developer',
    showDiv: false,
    randName : 'Vaxo',
    arr: ['Ani', 'Aram', 'Anahit']
  }
  changeName = () => {
    this.setState({
      name: 'Valod'
    })
  }
  showDiv = () => {
    this.setState({
      showDiv: !this.state.showDiv
    })
  }
  randName = () => {
    let randNumer = Math.floor(Math.random() * this.state.arr.length)
    this.setState({
      randName: this.state.arr[randNumer]
    })
  }

  render(){
    return(
      <div>
        Name : {this.state.name}
        Status : {this.state.status}
        <br />
        <br />
        <button onClick={this.changeName}> Change name</button>
        <br/>
        <br/>
         {this.state.showDiv?
        <div style={{color: 'red', fontSize: '15px'}}>this is error</div>
        : ''}
        <button onClick={this.randName}>Randome</button>
        {this.state.randName}
      </div>
    )
  }
}