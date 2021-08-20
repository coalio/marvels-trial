import {
    ACTION_ADD_FAVORITE_COMICS,
    ACTION_ADD_FAVORITE_CHARACTERS,
    ACTION_ADD_FAVORITE_STORIES,
    ACTION_REMOVE_FAVORITE_COMICS,
    ACTION_REMOVE_FAVORITE_CHARACTERS,
    ACTION_REMOVE_FAVORITE_STORIES,
} from "../actions/favorites";

const initialState = {
    comics: [],
    characters: [],
    stories: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_ADD_FAVORITE_COMICS:
            return { ...state, comics: [...state.comics, payload] };
        case ACTION_ADD_FAVORITE_CHARACTERS:
            return { ...state, characters: [...state.characters, payload] };
        case ACTION_ADD_FAVORITE_STORIES:
            return { ...state, stories: [...state.stories, payload] };
        case ACTION_REMOVE_FAVORITE_COMICS:
            return {
                ...state,
                comics: state.comics.filter((c) => c.id !== payload.id),
            };
        case ACTION_REMOVE_FAVORITE_CHARACTERS:
            return {
                ...state,
                characters: state.characters.filter((c) => c.id !== payload.id),
            };
        case ACTION_REMOVE_FAVORITE_STORIES:
            return {
                ...state,
                stories: state.stories.filter((s) => s.id !== payload.id),
            };
        default:
            return state;
    }
};

export default reducer;
