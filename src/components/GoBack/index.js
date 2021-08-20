import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const GoBack = (props) => {
    const { from } = props;

    return (
        <Fragment>
            <Link className="GoBack" to={from}>
                <i className="GoBack-icon fas fa-arrow-left" />
                Browse
            </Link>
        </Fragment>
    );
};

export default GoBack;
