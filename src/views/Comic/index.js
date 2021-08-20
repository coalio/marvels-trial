import React, { useState, useEffect } from "react";
import ComicContainer from "../../components/ComicContainer";
import ComicCard from "../../components/ComicCard";
import { getComicById } from "../../services/Search/comics";
import GoBack from "../../components/GoBack";

const Comic = (props) => {
    const { from } = props.navigation;
    const { id } = props.match.params;
    const [comic, setComic] = useState([]);

    useEffect(() => {
        if (!id) return;

        getComicById(id).then(({ error, data }) => {
            if (error) {
                setComic({ notFound: true });
                return;
            } else if (!data) {
                setComic({ notFound: true });
                return;
            }

            const comic = data.results[0];
            comic.image = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

            setComic(comic);
        });
    }, []);

    return (
        <ComicContainer>
            <GoBack from={from} />
            <ComicCard {...comic} />
        </ComicContainer>
    );
};

export default Comic;
