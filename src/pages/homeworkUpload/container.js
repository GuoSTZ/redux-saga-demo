import {sagaActions} from './saga';
import {connect} from 'react-redux';
import HomeworkUpload from "./views/index"
import { bindActionCreators as bindActions } from 'redux';
import { namespace } from './model';

function bindActionCreators(actions, dispatch) {
  let newActions = bindActions(actions, dispatch);
  for (var a in actions) {
    newActions[a].toString = actions[a].toString;
  }
  return newActions;
}  

const mapStateToProps = (state, props) => {
  return {
    reducer: state[namespace],
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators(sagaActions, dispatch),
    dispatch
  };
}


export const HomeworkUploadContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeworkUpload)
