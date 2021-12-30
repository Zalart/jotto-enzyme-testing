import React from "react";
import {mount} from 'enzyme';

import App from "./App";
import {findByTestAttr} from "../test/testUtils";

const setup = (state={}) => {
    //TODO: apply the state
    const wrapper = mount(<App />);
    //add value to the input
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', {target: {value: 'train'}});
    //simulate click
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault: ()=>{}});
    return wrapper;
}

describe.skip('no words guessed yet', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = setup({
            secretWord: "party",
            success: false,
            guessedWords: [],
        });
    });
    test('creates GuessedWords table with one row', ()=> {
        const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRows).toHaveLength(1);
    })
});

describe.skip('some words have been guessed', ()=> {
let wrapper;
const guessedWords = [
    {guessedWord: 'agile', letterMatchCount: 1},
    {guessedWord: 'lobster', letterMatchCount: 2},
];
beforeEach(()=>{
    wrapper = setup({
        secretWord: 'party',
        success: false,
        guessedWords: guessedWords,
    })
})
    test('Adds to the GuessedWords table one more row', ()=> {
        const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRows).toHaveLength(guessedWords.length + 1);
    });
});

describe.skip('the secret word is guessed', ()=> {
    let wrapper;
    const guessedWords = [
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'lobster', letterMatchCount: 2},
    ];
    beforeEach(()=>{
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: guessedWords,
        });
        //adding value to the input box
        const inputBox = findByTestAttr(wrapper, 'input-box');
        inputBox.simulate('change', {target:{value: 'party'}});

        //simulating a click onm the submit button
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault(){}});
    })

    test('adding rows to the guessedWords table', ()=> {
        const guessedRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedRows).toHaveLength(guessedWords.length + 1);
    });
    test('display congrats message', ()=> {
        const congrats = findByTestAttr(wrapper, 'component-congrats');
        expect(congrats.text().length).toBeGreaterThan(0);

    });
    test('input components does not display', ()=> {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.exists()).toBe(false);

        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.exists()).toBe(false)
    })

});

