import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import routeConfig from "./routes";
import Layout from "./components/Layout";
import "./global.scss"
import {transitions, positions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import store from './store'
import {Provider} from 'react-redux'

const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

const App = () => {
    return (
        <Switch>
            <Layout>
                {routeConfig.map(route => (
                    <Route key={route.path} path={route.path} component={route.component} exact/>
                ))}
            </Layout>
        </Switch>
    );
}

const renderToApp = () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        ReactDOM.createRoot(rootElement).render(
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...options}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </AlertProvider>
            </Provider>
        );
    }
    return null;
}

renderToApp();

export default renderToApp;
