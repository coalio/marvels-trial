import React, { Fragment, useState, useEffect } from "react";
import StoryContainer from "../../components/StoryContainer";
import StoryCard from "../../components/StoryCard";
import { getStoryById } from "../../services/Search/stories";
import GoBack from "../../components/GoBack";

const Story = (props) => {
    const { from } = props.navigation;
    const { id } = props.match.params;
    const [story, setStory] = useState([]);

    useEffect(() => {
        if (!id) return;

        getStoryById(id).then(({ error, data }) => {
            if (error) {
                setStory({ notFound: true });
                return;
            } else {
            }

            if (!data?.results[0]) {
                setStory({ notFound: true });
                return;
            }

            const story = data.results[0];

            setStory(story);
        });
    }, []);

    return (
        <Fragment>
            <StoryContainer>
                <GoBack from={from} />
                <StoryCard {...story} />
            </StoryContainer>
        </Fragment>
    );
};

export default Story;
