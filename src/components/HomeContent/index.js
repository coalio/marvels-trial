import React from "react";

const HomeContent = (props) => {
    const { children } = props;

    return <div className="Home-content container">{children}</div>;
};

export default HomeContent;
