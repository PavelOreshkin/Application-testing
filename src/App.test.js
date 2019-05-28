import React from 'react';
import { shallow } from 'enzyme';
// import { shallowToJson } from 'enzyme-to-json';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import App from './App';
configure({ adapter: new Adapter() });

describe('<App>', () => {
  const initialState = {
    isFetching: false,
    error: false,
    users: []
  };

  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<App store={store} />);
  })

  it('render component', () => {
    expect(container.length).toEqual(1);
  });

  it('check prop matches with initialState', () => {
    expect(container.prop('output')).toEqual(initialState.output);
  });
})