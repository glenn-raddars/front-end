import React, { Component } from 'react';

const Detail = [
    {id:1,title:"消息1",message:"我爱你，中国"},
    {id:2,title:"消息2",message:"我爱你，宜昌"},
    {id:3,title:"消息3",message:"垃圾西安"}
]

export default class DetailMessage extends Component {
  render() {
    //   console.log(this.props);
      const {id,title} = this.props.match.params;//这里拿到的id是一个字符串
      const findResult = Detail.find((dtlObj)=>{
            return dtlObj.id == id;
      })
    //   console.log(findResult);
    return (
        <ul>
            <li>id:{id}</li>
            <li>title:{title}</li>
            <li>message:{findResult.message}</li>
        </ul>
    );
  }
}
