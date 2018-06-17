import React from 'react';

export default class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      value: 0
    }
  }

  handleClick=(val)=>{
    this.setState({
      value: this.state.value + val
    })
  }

  handleChange=(event)=>{
    let val = Number(event.target.value)
    if(val){
      this.setState({
        value: val
      })
    }
  }

  render(){
    return(
      <div>
        <h1>Counter</h1>
        <button
          className='decrease'
          onClick={()=>this.handleClick(-1)}>
          -
        </button>
        <input
          className="input"
          onChange={this.handleChange}
          type="text"
          value={this.state.value}
          />
        <button
          className="increase"
          onClick={()=>this.handleClick(1)}>
          +
        </button>
      </div>
    )
  }
}
