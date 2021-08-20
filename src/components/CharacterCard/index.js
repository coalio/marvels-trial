import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
    getCharacterComics,
    getCharacterStories,
} from "../../services/Search/characters";
import Favorite from "../Favorite";

const CharacterCard = (props) => {
    const { image, name, id, description } = props;
    const [comics, setComics] = useState([]);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        getCharacterComics(id).then(({ error, data }) => {
            if (error) {
                setComics([]);
                return;
            } else if (!data) {
                setComics([]);
                return;
            }

            const comics = data.results;
            setComics(comics);
        });

        getCharacterStories(id).then(({ error, data }) => {
            if (error) {
                setStories([]);
                return;
            } else if (!data) {
                setStories([]);
                return;
            }

            const stories = data.results;
            setStories(stories);
        });
    }, [id]);

    const renderLists = () => {
        return (
            <Fragment>
                <Helmet>
                    <title>{`${name} - Marvel Trial`}</title>
                </Helmet>
                {comics?.length ? (
                    <div className="Content-card-list">
                        <h2>Comics this character appears on:</h2>
                        {comics.map((comic) => {
                            return (
                                <Link
                                    className="Content-card-list-item cornered-button cornered-button-red cornered-button-solid"
                                    to={`/comic/${comic.id}`}
                                >
                                    <span className="innerFill">
                                        {comic.title}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                ) : null}
                {stories?.length ? (
                    <div className="Content-card-list">
                        <h2>Stories this character appears on:</h2>
                        {stories.map((story) => (
                            <Link
                                className="Content-card-list-item cornered-button cornered-button-red cornered-button-solid"
                                to={`/story/${story.id}`}
                            >
                                <span className="innerFill">{story.title}</span>
                            </Link>
                        ))}
                    </div>
                ) : null}
            </Fragment>
        );
    };

    return (
        <div className="Content-card">
            <div className="Content-card-details">
                <div className="Content-card-image-container">
                    <Favorite type="characters" content={props} />
                    <img
                        className="Content-card-image"
                        src={image || "/images/thumbs/thumb-comic.jpg"}
                        alt={name || "Unknown"}
                    />
                </div>
                <div className="Content-card-content">
                    <h3>{name || "The Unknown"}</h3>
                    <h5>#{id || "???"}</h5>
                    <p>{description || "No description provided."}</p>
                    {renderLists()}
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
