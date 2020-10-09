import React, {useState} from 'react';
import Main from './Main';
import ReviewScreen from './ReviewScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export default function App(){
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/review-order" component={ReviewScreen} />
            </Switch>        
        </Router>
    )
}
