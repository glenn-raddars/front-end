import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { createPerson } from '../../redux/actions/Person';

class Person extends Component {

    addPerson = () =>{
        const Name = this.inputName.value;
        const Age  = parseInt(this.inputAge.value);
        const personObj = {id:nanoid(),name:Name,age:Age};
        this.props.addPerson(personObj);
    }

  render() {
    return (
        <div>
            <h2>上方组件的和为:{this.props.sum}</h2>
            <input ref={(c) => {this.inputName = c}} type="text" placeholder='输入姓名' />&nbsp;
            <input ref={(c) => {this.inputAge = c}} type="text" placeholder='输入年龄'/>&nbsp;
            <button onClick={this.addPerson}>输入</button>
            <ul>
                {
                    this.props.person.map((personObj)=>{
                        return <li key={personObj.id}>姓名:{personObj.name}---年龄:{personObj.age}</li>
                    })
                }  
            </ul>
        </div>
    )
  }
}

export default connect(
    (state)=>{
        return {person:state.person,sum:state.count};
    },
    {
        addPerson:createPerson
    }
)(Person)