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
describe('state control input field', function () {
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    let originalUseState;
    beforeEach(()=>{
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState;
        React.useState = jest.fn(()=> ["", mockSetCurrentGuess]);
        wrapper = setup();
    });
    afterEach(()=>{
        React.useState = originalUseState;
    })
    test('state updates with the value of input box upon change', ()=> {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = {target:{value: 'train'}};
        inputBox.simulate('change', mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    });
    test('setCurrentGuess gets called with an empty string when th submit is clicked', ()=> {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault () {}});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
});