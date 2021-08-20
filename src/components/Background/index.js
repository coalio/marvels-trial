import React, { Fragment, useState, useEffect } from "react";

const Background = (props) => {
    const { path, overlay, children } = props;
    const [backgroundStyle, setBackgroundStyle] = useState({});

    useEffect(() => {
        if (path) {
            setBackgroundStyle({
                backgroundImage: `url(${path})`,
            });
        }
    }, [path]);

    const className = `Background${overlay ? " Background-overlay" : ""}`;

    return (
        <Fragment>
            <div className={className} style={backgroundStyle} />
            {children}
        </Fragment>
    );
};

export default Background;
