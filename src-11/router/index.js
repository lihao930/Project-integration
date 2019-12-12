import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import RouterList from '../router/RouterList'
import RouteView from '../router/RouteView'
import {NavLink} from 'react-router-dom'
class Index extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                <div>
                    <NavLink to="/home">首页</NavLink>
                    <NavLink to="/about">列表</NavLink>
                </div>
                    <RouteView routes={RouterList} />
                </BrowserRouter>
            </>
        );
    }
}

export default Index;