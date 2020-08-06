import React from 'react';
import { Switch,Route } from "react-router-dom";

import  Dashboard  from "./dashboard";
import AllProducts from './allproducts';

class Content extends React.Component{

    render(){
        return(
            <Switch>
                <Route path='/' exact component={Dashboard}></Route>
                <Route path='/allproducts'component={AllProducts}></Route>
            </Switch>
        )
    }
}export default Content