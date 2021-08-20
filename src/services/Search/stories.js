import axios from "axios";
import { toast } from "react-toastify";

const stories = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

stories.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params["apikey"] = process.env.REACT_APP_PUBLIC_KEY;
    return config;
});

export const getStoryById = async (id) => {
    if (!id) {
        return { error: { status: "409", message: "You must provide an ID" } };
    }

    try {
        const fetched = await stories
            .get(`/stories/${id}`, {
                params: {
                    apikey: process.env.REACT_APP_PUBLIC_KEY,
                },
            })
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    if (error.response.data.code == 404) {
                        toast.error("Story not found");
                    } else {
                        toast.error(
                            "Oh no! Marvel's API just denied our request"
                        );
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    toast.error(
                        "Tried pinging the Marvel's API but it seems to be down"
                    );
                } else {
                    // Something happened in setting up the request that triggered an Error
                    toast.error(
                        "Internal server error. Calm down and wait for a bug fix"
                    );
                }
            });

        return { data: fetched.data.data };
    } catch (error) {
        return { error, data: { results: [] } };
    }
};

export const getStoryComics = async (id) => {
    if (!id) {
        return { error: { status: "409", message: "You must provide an ID" } };
    }

    try {
        const fetched = await stories
            .get(`/stories/${id}/comics`)
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    if (error.response.data.code == 404) {
                        toast.error("Story not found");
                    } else {
                        toast.error(
                            "Oh no! Marvel's API just denied our request"
                        );
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    toast.error(
                        "Tried pinging the Marvel's API but it seems to be down"
                    );
                } else {
                    // Something happened in setting up the request that triggered an Error
                    toast.error(
                        "Internal server error. Calm down and wait for a bug fix"
                    );
                }
            });

        return { data: fetched.data.data };
    } catch (error) {
        return { error, data: { results: [] } };
    }
};

export const getStoryCharacters = async (id) => {
    if (!id) {
        return { error: { status: "409", message: "You must provide an ID" } };
    }

    try {
        const fetched = await stories
            .get(`/stories/${id}/characters`)
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    if (error.response.data.code == 404) {
                        toast.error("Story not found");
                    } else {
                        toast.error(
                            "Oh no! Marvel's API just denied our request"
                        );
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    toast.error(
                        "Tried pinging the Marvel's API but it seems to be down"
                    );
                } else {
                    // Something happened in setting up the request that triggered an Error
                    toast.error(
                        "Internal server error. Calm down and wait for a bug fix"
                    );
                }
            });

        return { data: fetched.data.data };
    } catch (error) {
        return { error, data: { results: [] } };
    }
};
