import React, {useState} from 'react';
import PropTypes from 'prop-types';


function Input(props) {
    const [val, setVal] = useState("");
    const handleWordChange = (e) => {
        setVal(e.target.value);
    }
    const submitWord = () => {
        // word
    }
    return (
        <div className="input-component" data-test="component-input">
            <input type="text" value={val} onChange={handleWordChange}></input>
            <button onClick={submitWord}>Send</button>
        </div>
    );
}
Input.propTypes = {

};
export default Input;