import {getLetterMatchCount} from "./index";
import {get} from "enzyme/build/configuration";

describe('getLetterMatchCount',()=>{
    const secretWord = 'party';
    test('returns correct when there are no matching letters', ()=> {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
    });

    test('returns correct count when there are 4 matching letters', ()=> {
    const letterMatchCount = getLetterMatchCount('practice', secretWord)
    expect(letterMatchCount).toBe(4);
    });

    test('return correct count when there are duplicate letters', ()=> {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
    })
})