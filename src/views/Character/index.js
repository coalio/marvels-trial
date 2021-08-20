import React, { Fragment, useState, useEffect } from "react";
import CharacterContainer from "../../components/CharacterContainer";
import CharacterCard from "../../components/CharacterCard";
import { getCharacterById } from "../../services/Search/characters";
import GoBack from "../../components/GoBack";

const Character = (props) => {
    const { from } = props.navigation;
    const { id } = props.match.params;
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        if (!id) return;

        getCharacterById(id).then(({ error, data }) => {
            if (error) {
                setCharacter({ notFound: true });
                return;
            } else {
            }

            if (!data) {
                setCharacter({ notFound: true });
                return;
            }

            const character = data.results[0];
            character.image = `${character.thumbnail.path}.${character.thumbnail.extension}`;

            setCharacter(character);
        });
    }, []);

    return (
        <Fragment>
            <CharacterContainer>
                <GoBack from={from} />
                <CharacterCard {...character} />
            </CharacterContainer>
        </Fragment>
    );
};

export default Character;
