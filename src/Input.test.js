import React from "react";
import {shallow} from "enzyme";
import Input from "./Input";
import {findByTestAttr, checkProps} from "../test/testUtils";

const initialProps = {secretWord: "party"};

const setup = (props={}) => {
    const setupProps = {...initialProps, ...props};
    return shallow(<Input {...setupProps} />)
}

test('renders without error', ()=> {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1);
})

test('check props types: doesnt throw a warning with the expected props', ()=> {
    checkProps(Input, initialProps);
})
