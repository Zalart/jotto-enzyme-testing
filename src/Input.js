import React from 'react';
import PropTypes from 'prop-types';


function Input({secretWord}) {
    const [currentGuess, setCurrentGuess] = React.useState("");
    const handleWordChange = (e) => {
        setCurrentGuess(e.target.value);
    }
    const submitWord = (e) => {
        e.preventDefault();
        setCurrentGuess("");
        // also need to:
        // update guessedWords global state
        // check against secretWord and update success global state
    }
    return (
        <div className="component-input" data-test="component-input">
            <form className="form-inline">
            <input
                className="mb-2 mx-sm-3"
                data-test="input-box"
                type="text"
                placeholder="enter guess"
                value={currentGuess}
                onChange={handleWordChange} />
            <button data-test="submit-button" type="submit" onClick={submitWord}>Send</button>
            </form>
        </div>
    );
}

Input.propTypes = {
secretWord: PropTypes.string.isRequired,
};

export default Input;