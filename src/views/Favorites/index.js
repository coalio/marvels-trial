import React, { useState } from "react";
import { useSelector } from "react-redux";
import MarvelCardList from "../../components/MarvelCardsList";

const Favorites = () => {
    const [favorites] = useState(useSelector((state) => state.favorites));

    const renderCardList = (cards, type) => {
        if (type === "comics") {
            type = "comic";
        } else if (type === "characters") {
            type = "character";
        } else if (type === "stories") {
            type = "story";
        }

        const cardNodes = MarvelCardList({ cards, type: type });

        if (cardNodes && cardNodes.length > 0) {
            return cardNodes;
        } else {
            return (
                <div className="alert alert-info">
                    <strong>This list is empty.</strong>
                </div>
            );
        }
    };

    return (
        <div className="Favorites-container">
            <div className="Favorites-content">
                <h3>Favorite comics</h3>
                <div className="Favorites-content-list">
                    {renderCardList(favorites.comics, "comics")}
                </div>
                <h3>Favorite characters</h3>
                <div className="Favorites-content-list">
                    {renderCardList(favorites.characters, "characters")}
                </div>
                <h3>Favorite stories</h3>
                <div className="Favorites-content-list">
                    {renderCardList(favorites.stories, "stories")}
                </div>
            </div>
        </div>
    );
};

export default Favorites;
