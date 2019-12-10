import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    state={
        list:[],
        falg:false
    }
    render() {
        let {list,falg}=this.state
        return (
            <div>
                <p>搜索热点  <span onClick={()=>{
                    this.setState({
                        falg:!falg
                    })
                }}>换一换</span></p>
                {
                    falg&&<div>
                        {
                            list.slice(0,4).map((item,index)=><p key={index}>
                                {item.nm}
                            </p>)
                        }
                    </div>
                }
                {
                    !falg&&<div>
                        {
                            list.slice(4,8).map((item,index)=><p key={index}>
                                {item.nm}
                            </p>)
                        }
                    </div>
                }
            </div>
        );
    }
    componentDidMount(){
        axios('/mocklist').then(res=>{
            this.setState({
                list:res.data.list
            })
        })
    }
}

export default App;