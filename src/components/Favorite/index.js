import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/actions/favorites";

const Favorite = (props) => {
    const { type, content } = props;
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const addToFavorite = () => {
        dispatch({
            type: ACTIONS[type].add,
            payload: content,
        });
    };

    const removeFromFavorite = () => {
        dispatch({
            type: ACTIONS[type].remove,
            payload: content,
        });
    };

    const isFavorite = () =>
        !!favorites[type].find((fav) => fav.id === content.id);

    const toggleFavorite = () => {
        const favorite = isFavorite();

        if (favorite) {
            removeFromFavorite();
        } else {
            addToFavorite();
        }
    };

    const renderFavorite = () => {
        // for every favorite, check if the character is in the favorites array
        const favorite = isFavorite();
        const isFavoriteClass = favorite ? "is-favorite" : "";

        if (!content.id) {
            return null;
        }

        return (
            <div className="Favorite">
                <i
                    className={`Favorite-icon fa fa-star ${isFavoriteClass}`}
                    onClick={toggleFavorite}
                />
            </div>
        );
    };

    return renderFavorite();
};

export default Favorite;
