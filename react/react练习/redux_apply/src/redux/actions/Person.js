//专们生成Person的Action对象
export const createPerson = (personsObj)=>{
    return {type:'add_person',data:personsObj};
}