import axios from "axios";
import { toast } from "react-toastify";

const comics = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

comics.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params["apikey"] = process.env.REACT_APP_PUBLIC_KEY;
    return config;
});

export const searchComics = async (options = {}) => {
    const { title = "", limit = 100, offset = 0, issueNumber } = options;

    let params = {
        titleStartsWith: title || undefined,
        issueNumber: issueNumber || undefined,
        limit: limit < 100 ? limit : 100,
        offset,
    };

    try {
        const fetched = await comics
            .get("/comics", { params })
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    if (error.response.data.code == 404) {
                        toast.error(
                            "The API was updated, too bad the page wasn't"
                        );
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

export const getComicById = async (id) => {
    if (!id) {
        return { error: { status: "409", message: "You must provide an ID" } };
    }

    try {
        const fetched = await comics
            .get(`/comics/${id}`)
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    if (error.response.data.code == 404) {
                        toast.error("Comic not found");
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

export const getComicCharacters = async (id) => {
    if (!id) {
        return { error: { status: "409", message: "You must provide an ID" } };
    }

    try {
        const fetched = await comics
            .get(`/comics/${id}/characters`)
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    if (error.response.data.code == 404) {
                        toast.error("Comic not found");
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

export const getComicStories = async (id) => {
    if (!id) {
        return { error: { status: "409", message: "You must provide an ID" } };
    }

    try {
        const fetched = await comics
            .get(`/comics/${id}/stories`)
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    if (error.response.data.code == 404) {
                        toast.error("Comic not found");
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
