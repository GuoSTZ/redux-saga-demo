export { handleActions as reducerCreator } from 'redux-actions'

export const defaultState={
  // 定义默认的state数据
}

export function megerActionReducer(reducers,reducerTypes){
  const newReducer={}
  for(var r in reducers){
    newReducer[reducerTypes[r]]=reducers[r]
  }
  return newReducer
}


export function defaultReducer(){
  return {
    inital:(state,{payload})=>{
       return defaultState
    },
  }
}


