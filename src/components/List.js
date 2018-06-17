// Komponenten ska innehålla ett textfält där användaren kan skriva
// in en text. Där ska finnas en button,
// som man kan klicka på för att lägga till texten i en lista.
// Komponenten ska visa listan på något lämpligt sätt.
// När listan renderas ska varje element i den förses med en button som kan användas
// för att ta bort elementet.


import React from 'react';
import '../App.css';

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
    const animal = this.state;
    if (animal) {
      this.setState({
        myAnimalsList: [...this.state.myAnimalsList, this.state.animal]
      })
    }
  }

  handleRemoveAnimal=(remove)=>{
    let myAnimalsList = [...this.state.myAnimalsList]
    myAnimalsList = myAnimalsList.filter((item, i) => i !== remove)
    console.log(myAnimalsList);
    this.setState({ myAnimalsList })
  }

  render(){
    const allAnimals = this.state.myAnimalsList.map((item, i) =>
    (<li key={i}>
      <span>{item.toUpperCase()}</span>
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
