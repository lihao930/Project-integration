import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import RouteView from '../router/RouteView'

class Home extends Component {
    render() {
        let {routes}=this.props
        return (
            <div>
                <div>
                    <NavLink to="/home/lo">第一个</NavLink>
                    <NavLink to="/home/io">第二个</NavLink>
                    <NavLink to="/home/so">第三个</NavLink>
                </div>
                <RouteView routes={routes}/>
            </div>
        );
    }
}

export default Home;