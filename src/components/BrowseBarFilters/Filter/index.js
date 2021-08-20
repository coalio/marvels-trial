import React from "react";

const Filter = (props) => {
    const { filter, handleKeydown, onBlur } = props;

    const renderFilterComponent = () => {
        const filter_id = `filter-${filter.target}`;

        if (filter.kind === "input") {
            return (
                <div className="filter">
                    <label className="filter-label">{filter.name}:</label>
                    <input
                        className="filter-input"
                        type={filter.type}
                        id={filter_id}
                        name={filter.target}
                        placeholder={filter.placeholder}
                        onKeyDown={handleKeydown}
                        onBlur={onBlur}
                    />
                </div>
            );
        }
    };

    return renderFilterComponent();
};

export default Filter;
