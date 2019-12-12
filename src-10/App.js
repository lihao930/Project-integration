import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  state = {
    list: [],
    currindex: 0,
    sss: []
  }
  render() {
    let { list, currindex, sss } = this.state
    return (
      <div className="box">
        <div className="left">
          {
            list && list.map((item, index) => <p key={index} className={currindex == index ? "active" : null}
              onClick={() => {
                this.setState({
                  currindex: index
                })
                // axios('/ooo?id=' + index).then(res => {
                //   console.log(index);
                //   this.setState({
                //     sss: res.data.sss.children
                //   })
                // })
              }}
            >{item.nm}</p>)
          }
        </div>
        <div className="right">
          {
            // sss && sss.map((item, index) => <p key={index}>{item.nms}</p>)
          list&&list.map((item,index)=>{
            if(item.id==currindex){
            return <p>{item.children[0].nms}</p>
            }
          })
          }
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios("/list").then(res => {
      this.setState({
        list: res.data.list
      })
    })
    // axios('/ooo?id='+0).then(res => {
    //   this.setState({
    //     sss: res.data.sss.children
    //   })
    // })
  }
}

export default App;
