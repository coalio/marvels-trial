import React, { useState } from "react";
import Filter from "./Filter";

const BrowseBarFilters = (props) => {
    const { filters, applyFilters, appliedFilters } = props;
    const [selectedFilters, setSelectedFilters] = useState(appliedFilters);

    const handleKeydown = (e) => {
        // If enter is pressed
        if (e.keyCode === 13) {
            applyFilters({
                ...selectedFilters,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleFocusOut = (e) => {
        const value = e.target.value;

        if (value !== "") {
            setSelectedFilters({
                ...selectedFilters,
                [e.target.name]: value,
            });
        }
    };

    const renderFilters = () => {
        const filterNodes = Object.keys(filters).map((filter, index) => {
            const filter_detail = {
                ...filters[filter],
                name: filter,
                value: appliedFilters[filter],
            };

            return (
                <div key={index} className="Browse-filters-list-item">
                    <Filter
                        filter={filter_detail}
                        onBlur={handleFocusOut}
                        handleKeydown={handleKeydown}
                    />
                </div>
            );
        });

        return filterNodes;
    };

    return (
        <div className="Browse-filters">
            <input
                type="checkbox"
                id="Browse-open-filters"
                className="Browse-filters-open"
            />
            <label
                className="Browse-filters-filter"
                htmlFor="Browse-open-filters"
            >
                <i className="fas fa-filter" htmlFor="Browse-open-filters" />
            </label>
            <div className="Browse-filters-list">{renderFilters()}</div>
        </div>
    );
};

export default BrowseBarFilters;
