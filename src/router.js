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
    const Algorithm = dynamic({
        app, component: () => import('./routes/Algorithm'),
    });
    const Data = dynamic({
        app, component: () => import('./routes/Data'),
    });
    const Detail = dynamic({
        app, component: () => import('./routes/Detail'),
    });
    const Demo = dynamic({
        app, component: () => import('./routes/Demo'),
    });
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/tools" component={Tools} />
                <Route exact path="/presentation" component={Presentation} />
                <Route exact path="/algorithm" component={Algorithm} />
                <Route exact path="/data" component={Data} />
                <Route exact path="/datasets_details/:id" component={Detail} />
                <Route exact path="/code_details/:id" component={Detail} />
                <Route exact path="/demo_details/:id" component={Detail} />
                <Route exact path="/tool_doc/:id" component={Detail} />
                <Route exact path="/demo_info/:id" component={Detail} />
                <Route exact path="/tool_demo/:id" component={Demo} />
                <Route component={Homepage} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;
