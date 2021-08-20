import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { easterEgg } from "../../services/easter-egg";

const MarvelCard = (props) => {
    const { demo, content, className, type } = props;
    const [cardStyle, setCardStyle] = useState({});

    useEffect(() => {
        if (content && content.image) {
            setCardStyle({
                backgroundImage: `url(${content.image})`,
            });
        } else {
            setCardStyle({
                backgroundImage: `url("/images/thumbs/thumb-comic.jpg")`,
            });
        }
    }, [content]);

    const renderCardContent = () => {
        if (!content) return;
        const fallback = easterEgg(
            "description",
            content?.name || content?.title
        );

        return (
            <Fragment>
                {content.id ? (
                    <label className="Marvel-Card-title">
                        #{content.id} {content.name || content.title || ""}
                    </label>
                ) : null}
                <p className="Marvel-Card-description">
                    {content.description ? content.description : fallback}
                </p>
            </Fragment>
        );
    };

    const renderCard = () => {
        if (demo) {
            return (
                <div
                    className={`Marvel-Card${className ? ` ${className}` : ""}${
                        demo ? " demo" : ""
                    }`}
                    style={cardStyle}
                >
                    {renderCardContent()}
                </div>
            );
        } else {
            return (
                <Link to={`/${type}/${content?.id || 10}`}>
                    <div
                        className={`Marvel-Card${
                            className ? ` ${className}` : ""
                        }${demo ? " demo" : ""}`}
                        style={cardStyle}
                    >
                        {renderCardContent()}
                    </div>
                </Link>
            );
        }
    };

    return <Fragment>{renderCard()}</Fragment>;
};

MarvelCard.propTypes = {
    demo: PropTypes.bool,
    content: PropTypes.object,
    className: PropTypes.string,
};

export default MarvelCard;
