import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrowseResults from "../BrowseResults";
import BrowseBar from "../BrowseBar";
import { searchCharacters } from "../../services/Search/characters";
import { searchComics } from "../../services/Search/comics";
import {
    ACTION_SET_BROWSE_TYPE,
    ACTION_MEMOIZE_BROWSE_RESULTS,
} from "../../redux/actions/browse";

const BrowseContainer = () => {
    const searchBarRef = useRef(null);
    const browseOptions = useSelector((state) => state.browse);
    const [results, setResults] = useState(browseOptions.results);
    const [searchType, setSearchType] = useState(browseOptions.type || "comic");
    const [appliedFilters, setAppliedFilters] = useState({});
    const dispatch = useDispatch();

    const applyResults = (data) => {
        console.log(data[0]);
        dispatch({ type: ACTION_MEMOIZE_BROWSE_RESULTS, payload: data });
        setResults(data);
    };

    const searchForTerm = async (payload) => {
        if (searchType === "character") {
            const { data } = await searchCharacters({
                name: payload.term,
                comics: appliedFilters.comic || undefined,
                stories: appliedFilters.story || undefined,
            });

            if (!data.results.length) {
                applyResults([false]);
                return;
            }

            applyResults(data.results);
        } else if (searchType === "comic") {
            const { data } = await searchComics({
                title: payload.term,
                issueNumber: appliedFilters.issue,
            });

            if (!data.results.length) {
                applyResults([false]);
                return;
            }

            applyResults(data.results);
        }
    };

    const applyFilters = (filters) => {
        setAppliedFilters(filters);
    };

    const switchType = (type) => {
        dispatch({ type: ACTION_SET_BROWSE_TYPE, payload: type });
        setSearchType(type);
    };

    useEffect(() => {
        searchForTerm({ term: searchBarRef.current?.value });
    }, [searchType, appliedFilters]);

    return (
        <div className="Browse container">
            <div className="row">
                <div className="col-md-12">
                    <BrowseBar
                        searchBarRef={searchBarRef}
                        onSubmit={searchForTerm}
                        searchType={searchType}
                        switchType={switchType}
                        applyFilters={applyFilters}
                        appliedFilters={appliedFilters}
                    />
                </div>
                <div className="col-md-12">
                    <BrowseResults
                        term={searchBarRef.current?.value}
                        results={results}
                        type={searchType}
                    />
                </div>
            </div>
        </div>
    );
};

export default BrowseContainer;
