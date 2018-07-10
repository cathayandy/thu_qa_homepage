import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
    const Homepage = dynamic({
        app, component: () => import('./routes/Homepage'),
    });
    const Tools = dynamic({
        app, component: () => import('./routes/Tools'),
    });
    const Presentation = dynamic({
        app, component: () => import('./routes/Presentation'),
    });
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/tools" component={Tools} />
                <Route exact path="/presentation" component={Presentation} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;
