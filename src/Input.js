import React, {useState} from 'react';
import PropTypes from 'prop-types';


function Input({secretWord}) {
    const [val, setVal] = useState("");
    const handleWordChange = (e) => {
        setVal(e.target.value);
    }
    const submitWord = () => {
        // word
    }
    return (
        <div className="component-input" data-test="component-input">
            <input type="text" value={val} onChange={handleWordChange}></input>
            <button onClick={submitWord}>Send</button>
        </div>
    );
}

Input.propTypes = {
secretWord: PropTypes.string.isRequired,
};

export default Input;