import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
    getComicCharacters,
    getComicStories,
} from "../../services/Search/comics";
import Favorite from "../Favorite";

const ComicCard = (props) => {
    const { title, image, description, id } = props;
    const [characters, setCharacters] = useState([]);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        getComicCharacters(id).then(({ error, data }) => {
            if (error) {
                setCharacters([]);
                return;
            } else if (!data) {
                setCharacters([]);
                return;
            }

            const characters = data.results;
            setCharacters(characters);
        });

        getComicStories(id).then(({ error, data }) => {
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
                    <title>{`${title} - Marvel Trial`}</title>
                </Helmet>
                {characters?.length ? (
                    <div className="Content-card-list">
                        <h2>Characters of this comic:</h2>
                        {characters.map((character) => (
                            <Link
                                className="Content-card-list-item cornered-button cornered-button-red cornered-button-solid"
                                to={`/character/${character.id}`}
                            >
                                <span className="innerFill">
                                    {character.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                ) : null}
                {stories?.length ? (
                    <div className="Content-card-list">
                        <h2>Stories of this comic:</h2>
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
        <div className="Character-card">
            <div className="Content-card-details">
                <div className="Content-card-image-container">
                    <Favorite type="comics" content={props} />
                    <img
                        className="Content-card-image"
                        src={image || "/images/thumbs/thumb-comic.jpg"}
                        alt={title || "Unknown"}
                    />
                </div>
                <div className="Content-card-content">
                    <h3>{title || "Tales of the Unknown"}</h3>
                    <h5>#{id || "???"}</h5>
                    <p>{description || "No description provided."}</p>
                    {renderLists()}
                </div>
            </div>
        </div>
    );
};

export default ComicCard;
