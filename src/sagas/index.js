import * as effects from 'redux-saga/effects'
// export * as effects from 'redux-saga/effects'

export function defaultSaga(actions,Api,namespace){
  const saga= {
    // 这里可以用来创建saga的默认方法
  }
  return saga
}

export function *takeSagas(sagaTypes,saga,optimize={}){
  for(var s in saga){
    if(optimize[s]){
      yield optimize[s](sagaTypes[s].toString(),saga[s])
    }else{
      yield effects.takeEvery(sagaTypes[s].toString(),saga[s])
    }
  }
}
