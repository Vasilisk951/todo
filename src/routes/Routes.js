import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTES from './routesNames';
import FormPageContainer from '../pages/TODOList/containers/FormPageContainer'

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME} component={FormPageContainer} />
        </Switch>
    )
}

export default Routes;