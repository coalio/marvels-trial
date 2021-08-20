import React, { useState, useEffect } from "react";
import MarvelCard from "../MarvelCard";

const demoCards = [
    <MarvelCard className="Browse-results-list-item" key="demo-1" demo />,
    <MarvelCard className="Browse-results-list-item" key="demo-2" demo />,
    <MarvelCard className="Browse-results-list-item" key="demo-3" demo />,
];

const MarvelCardsList = (props) => {
    const { cards, type, displayDemos } = props;
    const [cardNodes, setCardNodes] = useState(demoCards);

    useEffect(() => {
        if (cards.length > 0 && cards[0] instanceof Object) {
            setCardNodes(
                cards.map((card) => {
                    card.key = `${card.id}.${type}`;

                    if (type !== "story") {
                        card.image = `${card.thumbnail?.path}.${card.thumbnail?.extension}`;
                    } else {
                        // Stories do not use images
                        card.image = null;
                    }

                    return (
                        <MarvelCard
                            key={`${card.id}.${type}`}
                            content={card}
                            type={type}
                            className="Browse-results-list-item"
                        />
                    );
                })
            );
        } else if (cards[0] === false || !displayDemos) {
            setCardNodes([]);
        }
    }, [cards]);

    return cardNodes;
};

export default MarvelCardsList;
