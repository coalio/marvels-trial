import React from "react";

const HomeContainer = (props) => {
    const { children } = props;

    return (
        <div className="Home-container">
            <div className="comics-wall" />
            {children}
        </div>
    );
};

export default HomeContainer;
