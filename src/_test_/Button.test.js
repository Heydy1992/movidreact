import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/buttons/button';


describe('Componente Button', () => {
  let wrapper;
  const mockOnClick = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Button onClick={mockOnClick} className="test-class">
        Click me
      </Button>
    );
  });

  it('Renderiza sin fallar', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Representa los childres correctamente', () => {
    expect(wrapper.text()).toEqual('Click me');
  });

  it('Aplica className Correctamente', () => {
    expect(wrapper.hasClass('test-class')).toBe(true);
  });

  it('Llama onClick cuando se hace click', () => {
    wrapper.simulate('click');
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('Tiene el tipo predeterminado "Button"', () => {
    expect(wrapper.prop('type')).toEqual('button');
  });

  it('Permite anular el tipo predeterminado', () => {
    wrapper.setProps({ type: 'submit' });
    expect(wrapper.prop('type')).toEqual('submit');
  });

  it('tiene propiedades predeterminadas para nombre de className', () => {
    const buttonWithoutClassName = shallow(
      <Button onClick={mockOnClick}>Click me</Button>
    );
    expect(buttonWithoutClassName.hasClass('')).toBe(true);
  });
});