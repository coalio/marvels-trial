import React from "react";
import HomeMenuPanel from "./HomeMenuPanel";

const HomeMenu = (props) => {
    return (
        <div className="Home-menu">
            <div className="row">
                <div className="col-md-5">
                    <h1 className="Home-menu-item panel-title">
                        MARVEL'S TRIAL
                    </h1>
                    <h2 className="Home-menu-item">
                        A comicpedia fed on the Marvel's official API
                    </h2>
                </div>
                <div className="col-md-7">
                    <HomeMenuPanel />
                </div>
            </div>
        </div>
    );
};

export default HomeMenu;
