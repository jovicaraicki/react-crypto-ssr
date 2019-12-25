import React from 'react';
import { Switch, Route }  from 'react-router';
import Home from './pages/home';

const App = () => {
    return (
        <Switch>
            <Route exact path='/' render={props => (
                <Home {...props} />
            )} />
        </Switch>
    );
};

export default App;