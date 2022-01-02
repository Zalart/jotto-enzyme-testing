import moxios from 'moxios';

import {getSecretWord} from "./index";

describe('get secret word', ()=> {
    beforeEach(()=>{
        moxios.install();
    });
    afterEach(()=> {
        moxios.uninstall();
    });

    test('the secretWord is returned from the function', ()=> {
        moxios.wait(()=> {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: 'party',
            })
        })
        // update to test app in Redux / context sections
        return getSecretWord()
            .then(secretWord=> {
        expect(secretWord).toBe('party');
        })
    })
})