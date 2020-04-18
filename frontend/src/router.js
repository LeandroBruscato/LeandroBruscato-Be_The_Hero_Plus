import React from 'react'
import {BrowserRouter,Route, Switch } from 'react-router-dom';
import Logon  from './pagers/logon';
import Register  from './pagers/register';
import Profile  from './pagers/profile';
import NewIncident  from './pagers/newIncident';

export default function Routes()
{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component = {Logon}/>
            <Route path="/register" component = {Register}/>
            <Route path="/profile" component = {Profile}/>
            <Route path="/incident/new" component = {NewIncident}/>
        </Switch>
        </BrowserRouter>
    )
}