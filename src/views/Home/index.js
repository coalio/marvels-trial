import React, { Fragment } from "react";
import HomeContainer from "../../components/HomeContainer";
import HomeContent from "../../components/HomeContent";
import HomeMenu from "../../components/HomeMenu";

export default function Home() {
    return (
        <Fragment>
            <HomeContainer>
                <HomeContent>
                    <HomeMenu />
                </HomeContent>
            </HomeContainer>
        </Fragment>
    );
}
