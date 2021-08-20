import React from "react";

const CharacterContainer = (props) => {
    const { children } = props;
    return <div className="Content-container">{children}</div>;
};

export default CharacterContainer;
