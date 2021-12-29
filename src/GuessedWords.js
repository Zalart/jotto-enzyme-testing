import React from 'react';
import PropTypes from "prop-types";

const GuessedWords = (props) => {
    return (
        <div className="guessed-words" data-test="component-guessed-words">
            {props.guessedWords.length===0 ? <span className="instructions" data-test="instructions">
                Try to guess the secret word!
            </span> : <div data-test="guessed-words-section"><h3>Guessed words</h3>
                <table>
                    <thead>
                        <tr><th>Guessed word</th><th>Matching letters</th></tr>
                </thead>
                    <tbody>
                    {props.guessedWords.map((word, index) => (
                        <tr data-test="guessed-word" key={index}>
                            <td>{word.guessedWord}</td>
                            <td>{word.letterMatchCount}</td>
                        </tr>
                    )
                    )}
                    </tbody>
                </table></div>}
        </div>
    );
};

GuessedWords.propTypes = {
guessedWords: PropTypes.arrayOf(
    PropTypes.shape(
    {
        guessedWord: PropTypes.string.isRequired,
        letterMatchCount: PropTypes.number.isRequired,
    }
    )
).isRequired,
};
export default GuessedWords;
