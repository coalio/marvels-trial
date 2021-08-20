import React from "react";
import PropTypes from "prop-types";
import MarvelCardsList from "../MarvelCardsList";

const BrowseResults = (props) => {
    const { term, type, results } = props;
    return (
        <div className="Browse-results">
            {term ? (
                <label className="Browse-results-label">
                    Showing results for "{term}"
                </label>
            ) : (
                <br />
            )}
            <div className="Browse-results-list">
                <MarvelCardsList cards={results} type={type} />
            </div>
        </div>
    );
};

BrowseResults.propTypes = {
    term: PropTypes.string,
    results: PropTypes.array,
};

export default BrowseResults;
