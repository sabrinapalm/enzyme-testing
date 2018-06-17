import React from 'react';

export default class List extends React.Component {
  constructor(){
    super();
    this.state={
      myAnimalsList: [],
      animal: ''
    }
  }

  handleChange = (event) =>{
    this.setState({
      animal: event.target.value
    })
  }

  handleAddAnimal = () => {
    const { animal, myAnimalsList } = this.state;
    if (animal) {
      this.setState({
        myAnimalsList: [...myAnimalsList, animal]
      })
    } else {
      console.log('empty');
    }
  }

  handleRemoveAnimal=(remove)=>{
    let myAnimalsList = [...this.state.myAnimalsList]
    myAnimalsList = myAnimalsList.filter((item, i) => i !== remove)
    this.setState({ myAnimalsList })
  }

  render(){
    const allAnimals = this.state.myAnimalsList.map((item, i) =>
    (<li key={i}>
      <span>{item}</span>
        <button
          className="removebutton"
          onClick={() => this.handleRemoveAnimal(i)}
          >
          REMOVE
        </button>
      </li>
    ))
    return(
      <div className="container">
        <h1>Animal List</h1>
        <input className="input" onChange={this.handleChange} animal='animal' />
        <br />
        <button className="button" onClick={this.handleAddAnimal}>ADD ANIMAL</button>
        <div className="listcontainer"><ul className="list">{allAnimals}</ul></div>
      </div>
    );
  }
}
