const defaultState = {
    visible: false,
    index: 0
}
const modal = (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return { ...state, visible: true, index: action.index };
        case 'HIDE_MODAL':
            return { ...state, visible: false };
        case 'MODIFY_CONFIRM':
            return { ...state, visible: false, ...action.value };
        default:
            return state;
    }
};

export default modal;
