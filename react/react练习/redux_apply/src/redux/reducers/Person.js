
export default function personReducer(preState = [{id:'001',name:'Tom',age:18}],action){
    const {type,data} = action;
    switch (type) {
        case 'add_person':
            return [...preState,data];
        default:
            return preState;
    }
}