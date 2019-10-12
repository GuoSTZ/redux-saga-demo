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
        default:
            return state;
    }
};

export default modal;
