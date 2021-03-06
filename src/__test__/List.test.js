import React from 'react';
import { shallow } from 'enzyme';
import List from '../components/List.js';

describe('List renders without crashing', () => {

  //component tests
  it('should render component without crashing', () => {
    const wrapper = shallow(<List />);
  })

  it('should render heading Animal List', () => {
  	const wrapper = shallow(<List />);
  	const myListName = <h1>Animal List</h1>;
  	expect(wrapper.contains(myListName)).toBe(true);
  });

  it('should render add animal button', () => {
    const wrapper = shallow(<List />);
    expect(wrapper.find('button').length).toBe(1)
  });

  it('should render input', ()=>{
    let wrapper = shallow(<List />)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('should render a animallist', ()=>{
    let wrapper = shallow(<List />)
    let allAnimals;
    expect(wrapper.contains(<ul className="list">{allAnimals}</ul>)).toBe(true)
  })

  //functionality tests
  it('should test initialstate of my animalslist', ()=>{
    const wrapper =  shallow(<List />);
    wrapper.state('myAnimalsList');
    expect(wrapper.state('myAnimalsList')).toEqual([]);
  })

  it('should test if state of animalslist is rendered in ul', ()=>{
    const wrapper =  shallow(<List />);
    wrapper.setState({myAnimalsList: ['dog', 'cat', 'bird']})
     expect(wrapper.contains(<span>dog</span>)).toBe(true);
     expect(wrapper.contains(<span>cat</span>)).toBe(true);
     expect(wrapper.contains(<span>bird</span>)).toBe(true);
  })

  it('should test remove first element of list' ,()=>{
    const wrapper =  shallow(<List />);
    wrapper.setState({myAnimalsList: ['dog', 'cat', 'bird', 'pig']})
    let button = wrapper.find('.removebutton').at(2);
    button.simulate('click');
    expect(wrapper.state('myAnimalsList').length).toBe(3);
    expect(wrapper.state('myAnimalsList')).toEqual(['dog', 'cat', 'pig'])
  })

  it('should test if button adds animal to myanimallist', ()=>{
    const wrapper =  shallow(<List />);
    wrapper.state('myAnimalsList');
    let input = wrapper.find('input').at(0);
    let button = wrapper.find('button').at(0);
    let myAnimal = "cat";
    input.simulate('change', {target:{value: myAnimal}})
    button.simulate('click');
    expect(wrapper.state('myAnimalsList')).toEqual([myAnimal])
  })

  it('should not add animal if animal is empty string', ()=>{
    const wrapper =  shallow(<List />);
    wrapper.state('myAnimalsList');
    let input = wrapper.find('input').at(0);
    let button = wrapper.find('button').at(0);
    let myAnimal = '';
    input.simulate('change', {target: {value: myAnimal}})
    button.simulate('click');
    expect(wrapper.state('myAnimalsList').length).toBe(0);
  })


})
