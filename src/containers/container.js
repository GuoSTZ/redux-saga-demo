import {sagaActions} from '../sagas/saga';
import {namespace} from '../models/models';
import {connect} from 'react-redux';
import indexView from '../views/indexView'

function bindActionCreators(actions, dispatch) {
    let newActions = bindActions(actions, dispatch);
    for (var a in actions) {
      newActions[a].toString = actions[a].toString;
    }
    return newActions;
  }  

const mapStateToProps = (state, props) => {
    console.log(state,'mapStateToProps---state')
    console.log(props,'mapStateToProps---props')
  return {
    test: 'test'
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators(sagaActions, dispatch),
    dispatch
  };
};

export const IndexContainer = injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(indexView)
);
