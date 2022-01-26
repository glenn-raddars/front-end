// 该组件专门为Count组件生成Action对象

export function createIncreamentAction(data){
    return {type:'increament',data:data};
}
export function createDecreamentAction(data){
    return {type:'decreament',data:data};
}