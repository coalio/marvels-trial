import React, { useRef, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import BrowseBarFilters from "../BrowseBarFilters";
import filters from "../../data/filters";

const BrowseBar = (props) => {
    const {
        searchBarRef,
        onSubmit,
        searchType,
        switchType,
        applyFilters,
        appliedFilters,
    } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchBarRef && searchBarRef.current) {
            event.term = searchBarRef.current.value;
        }

        if (onSubmit instanceof Function) {
            onSubmit(event);
        }
    };

    const renderSearchTypes = () => {
        const searchTypes = ["comic", "character"];

        return searchTypes.map((type) => {
            const isActive = type === searchType;
            const className = isActive ? "active" : "";

            return (
                <button
                    className={`Browse-searchTypes-type ${className}`}
                    onClick={() => switchType(type)}
                    key={type}
                >
                    {type}
                </button>
            );
        });
    };

    return (
        <Fragment>
            <form className="Browse-bar" onSubmit={handleSubmit}>
                <i
                    className="Browse-bar-icon fas fa-search"
                    onClick={handleSubmit}
                />
                <input
                    type="text"
                    ref={searchBarRef || null}
                    className="Browse-bar-input"
                    placeholder={`Browse ${searchType}s`}
                />
            </form>
            <div className="Browse-searchTypes">{renderSearchTypes()}</div>
            <BrowseBarFilters
                filters={filters[searchType]}
                applyFilters={applyFilters}
                appliedFilters={appliedFilters}
            />
        </Fragment>
    );
};

BrowseBar.propTypes = {
    searchBarRef: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    searchType: PropTypes.string,
};

export default BrowseBar;
