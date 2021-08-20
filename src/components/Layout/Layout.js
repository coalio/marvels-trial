import React, { Fragment } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Background from "../../components/Background";
import routes from "../../routes";
import Header from "./Header";

import "../../assets/scss/main.scss";

export default function Layout() {
    const { pathname } = useLocation();

    const renderHeader = () => {
        return pathname !== "/" ? <Header /> : null;
    };

    return (
        <Fragment>
            <Background path="/images/thumbs/thumb-comic.jpg" overlay>
                {renderHeader()}
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={(props) => (
                                    <Fragment>
                                        <Helmet>
                                            <meta charSet="utf-8" />
                                            <title>{route.name}</title>
                                        </Helmet>
                                        <route.component
                                            {...{
                                                navigation: {
                                                    from: route.from,
                                                },
                                            }}
                                            {...props}
                                        />
                                    </Fragment>
                                )}
                            />
                        ) : null;
                    })}
                </Switch>
            </Background>
        </Fragment>
    );
}
