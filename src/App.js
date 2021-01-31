import React, {useState} from 'react';
import Main from './components/Main';
import ReviewScreen from './components/ReviewScreen';
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