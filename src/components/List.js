import React from 'react';

export default class List extends React.Component {
  constructor(){
    super();
    this.state={
      myAnimalsList: [],
      input: ''
    }
  }

  handleChange = (event) =>{
    this.setState({input: event.target.value})
  }

  handleClick = () => {
    const input = this.state;
    if (input) {
      this.setState({
        myAnimalsList: [...this.state.myAnimalsList, this.state.input]
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
      <button onClick={() => this.handleRemoveAnimal(i)} style={styles.removebutton}>REMOVE</button>
      </li>
    ))
    return(
      <div style={styles.container}>
        <input style={styles.input} onChange={this.handleChange} input='input' />
        <br />
        <button style={styles.button} onClick={this.handleClick}>ADD ANIMAL</button>
        <div style={styles.listcontainer}><ul style={styles.list}>{allAnimals}</ul></div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: 500,
    margin: '200px auto',
  },
  listcontainer: {
    width: 500
  },
  button: {
    width: 200,
    backgroundColor: '#4bbb8b',
    color: 'white',
    padding: '10px 20px',
    margin: '8px 0',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    letterSpacing: 1,
    fontFamily: 'Calibri',
  },
  input: {
    width: 200,
    padding: '10px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: 4,
    boxSizing: 'border-box'
  },
  list: {
    listStyle: 'none',
  },
  removebutton: {
    width: 100,
    backgroundColor: '#ce2525',
    color: 'white',
    padding: '10px 20px',
    margin: '8px 10px',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    letterSpacing: 1,
    fontFamily: 'Calibri',
  }
}
