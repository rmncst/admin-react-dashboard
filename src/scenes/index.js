import React from 'react';
import { Route , Switch } from "react-router-dom";

import MenuIcon from '@material-ui/icons/Menu';    
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import ExampleScene from './example';
import HomeScene from './home/HomeScene.js';

const routes = [
    { path: "/example2" , resolve: <ExampleScene /> , menu: "Example 2", icon: <MailIcon /> } ,
    { path: "/example" , resolve: <ExampleScene /> , menu: "Example", icon: <InboxIcon /> } ,
    { path: "/" , resolve: <HomeScene /> , menu: "Home", icon: <MenuIcon /> } ,
]

export const Scenes =
    <Switch>
        {routes.map( item => <Route key={item.path} path={item.path}>{item.resolve}</Route>)}        
    </Switch>
;
    
export const MenuItens  = routes.map(item => 
    { 
        return { Text: item.menu, Icon: item.icon, Path: item.path }; 
    } 
);
