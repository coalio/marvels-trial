import React from "react";

const ComicContainer = (props) => {
    const { children } = props;
    return <div className="Content-container">{children}</div>;
};

export default ComicContainer;
