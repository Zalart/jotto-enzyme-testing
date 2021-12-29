import React from 'react';
import {shallow} from "enzyme";
import {findByTestAttr, checkProps} from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
    guessedWords: [{guessedWord: "test", letterMatchCount: 2}],
}
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps} />)

}
test('Checking props types: does not throw a warning with expected props', ()=> {
checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', function () {
    let wrapper;
    beforeEach(()=> {
        wrapper = setup({guessedWords:[]})
    })
    test('the component renders without error', ()=> {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders the instructions to guess a word', ()=> {
        const instructions = findByTestAttr(wrapper, 'instructions');
        expect(instructions.text()).not.toBeUndefined();
    });
});

describe('if there are words guessed', function () {

});