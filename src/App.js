import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route } from "react-router-dom";
import { getStore, getPersistor } from "./redux/store";

const loading = () => {
    return <div>Loading!</div>;
};

// Containers
const Layout = React.lazy(() => import("./components/Layout/Layout"));

class App extends Component {
    render() {
        const store = getStore();
        const persistor = getPersistor(store);

        return (
            <Fragment>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <BrowserRouter>
                            <React.Suspense fallback={loading()}>
                                <Route
                                    path="/"
                                    name="Main"
                                    component={Layout}
                                />
                            </React.Suspense>
                        </BrowserRouter>
                    </PersistGate>
                </Provider>
            </Fragment>
        );
    }
}

export default App;
