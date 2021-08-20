import React from "react";

const StoryContainer = (props) => {
    const { children } = props;
    return <div className="Content-container">{children}</div>;
};

export default StoryContainer;
