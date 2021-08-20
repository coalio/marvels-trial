import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
    getStoryComics,
    getStoryCharacters,
} from "../../services/Search/stories";
import Favorite from "../Favorite";

const StoryCard = (props) => {
    const { title, id, description } = props;
    const [comics, setComics] = useState([]);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getStoryComics(id).then(({ error, data }) => {
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

        getStoryCharacters(id).then(({ error, data }) => {
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
    }, [id]);

    const renderLists = () => {
        return (
            <Fragment>
                <Helmet>
                    <title>{`${title} - Marvel Trial`}</title>
                </Helmet>
                {comics?.length ? (
                    <div className="Content-card-list">
                        <h2>Comics of this story:</h2>
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
                {characters?.length ? (
                    <div className="Content-card-list">
                        <h2>Characters of this story:</h2>
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
            </Fragment>
        );
    };

    return (
        <div className="Story-card">
            <div className="Content-card-details">
                <div className="Content-card-content">
                    <div className="Content-card-content-rtl-favorite">
                        <Favorite type="stories" content={props} />
                    </div>
                    <h3>{title || "The story of nobody"}</h3>
                    <h5>#{id || "???"}</h5>
                    <p>{description || "No description provided."}</p>
                    {renderLists()}
                </div>
            </div>
        </div>
    );
};

export default StoryCard;
