
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Main from '../components/main/main';

describe('Componente APP', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Renderiza sin fallar', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Renderiza el componente Header', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('Renderiza el componente Main', () => {
    expect(wrapper.find(Main).exists()).toBe(true);
  });

  it('Renderiza el componente Footer', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});