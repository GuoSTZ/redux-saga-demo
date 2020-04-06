import { actionTypes } from '../common/actionTypes';

import {createAction,createActions} from 'redux-actions'

const payloadFn=(payload,meta)=>payload
const metaFN=(payload)=>({sagaAction:true})

export function defineActions(obj){
  var defineObj={}
  for(var o in obj){
    Object.defineProperty(defineObj, o, {
      value:[payloadFn,metaFN]
    })
  }
  return defineObj
}


export function createDefineActions(actions,namespace){
  let namespace_copy = namespace.replace(namespace[0],namespace[0].toLowerCase())
  return createActions({
    [namespace]: defineActions(actions)
  })[namespace_copy]

}
