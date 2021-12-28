// receive the success state as a prop
import React from 'react';
import PropTypes, {bool} from 'prop-types';
const Congrats = ({success}) => {
    return (
        <div data-test="component-congrats" className="component-congrats">
            <span data-test="congrats-message" className="congrats-message">{success ? "You've guessed the word, congratulations!" : null}</span>
            
        </div>
    );
};

export default Congrats;

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}