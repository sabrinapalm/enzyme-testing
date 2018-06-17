import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../components/Counter.js';

describe('Counter renders without crashing', () => {

  //component tests
  it('should render component without crashing', () => {
    let wrapper = shallow(<Counter />)
  })

  it('should render heading Counter', () => {
  	const wrapper = shallow(<Counter />);
  	const myCounterName = <h1>Counter</h1>;
  	expect(wrapper.contains(myCounterName)).toBe(true);
  });

  it('should render increase/decrease buttons', () => {
   let wrapper = shallow(<Counter />)
   expect(wrapper.find('.increase').length).toBe(1)
   expect(wrapper.find('.decrease').length).toBe(1)
 })

  it('should render input', () => {
    let wrapper = shallow(<Counter />)
    expect(wrapper.find('input').length).toBe(1)
  })

  //functionality tests
  it('should test initialstate-value of Counter', ()=>{
    const wrapper =  shallow(<Counter />);
    wrapper.state('value');
    expect(wrapper.state('value')).toEqual(0);
  })

  it('should increase number by 1 on click', () => {
    let wrapper = shallow(<Counter />)
    let increase = wrapper.find('.increase').at(0);
    increase.simulate('click');
    expect( wrapper.state('value')).toBe(1);
  })

  it('should decrease number by 1 on click', () => {
    let wrapper = shallow(<Counter />)
    let decrease = wrapper.find('.decrease').at(0);
    decrease.simulate('click');
    expect( wrapper.state('value')).toBe(-1);
  })

  it('should change the state if input value is changed', ()=>{
    let wrapper = shallow(<Counter />)
    let input = wrapper.find('input').at(0);
    input.simulate('change', {target: {value: 12}})
    expect(wrapper.state('value')).toBe(12);
  })

  test('should not add input if inputvalue is not a number', ()=>{
    let wrapper = shallow(<Counter />)
    let input = wrapper.find('input').at(0);
    let string = 'NaN'
    let initialState = wrapper.state('value');
    input.simulate('change', {target: {value: string}})
    expect(wrapper.state('value')).toBe(initialState);
  })

})
