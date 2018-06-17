import React from 'react';
import { shallow } from 'enzyme';
import List from '../components/List.js';

// shallow(<App/>)	- grund/ytlig rendering
// mount(<App/>)		- full rendering, livscykel och DOM
// render(<App/>)		- statisk renderin

// shallow(jsxReactComponent)	-- shallow render, ShallowWrapper
// find(selector)			returnera noder som matcher CSS selektorer
// contains(jsxNode)		true om wrappern innehåller jsx-noden
// hasClass(className)	noden har en CSS-klass
// is(selector)			matchar en CSS-selektor
// html()					gör om wrappern till en sträng med HTML
// state(key)				returnerar värdet på komponentens state
// setState(nextState)	sätter state
// simulate(eventName)	simulera ett event på noden
// render()				deep render
// instance()				returnerar React-komponenten


//Testa att den renderar korrekt.
//Testa lägga till och ta bort
//Testa att state uppdaterar



describe('list renders without crashing', () => {


  it('should render without crashing', () => {
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



})
