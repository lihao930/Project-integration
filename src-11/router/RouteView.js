import React, { Component } from 'react';
import {Redirect,Route,Switch} from 'react-router-dom'

export default function RouteView(props){
    let {routes}=props
    return(
        <Switch>
            {
                routes.map((item,index)=>item.redirect?<Redirect key={index} to={item.redirect}/>:
                <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} routes={item.children}/>
                }}/>)
            }
        </Switch>
    )
}