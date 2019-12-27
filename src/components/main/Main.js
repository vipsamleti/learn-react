import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Series from '../../containers/series/Series'
import SingleSeries from '../../containers/series/single_series'

const Main = props => (

    <Switch>
        <Route exact path = "/" component = {Series}/>
        <Route path = "/series/:id" component = {SingleSeries} />
    </Switch>
);

export default Main;