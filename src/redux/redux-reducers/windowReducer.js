const windowReducer = (state = [true, false, false, false, false], action) => {
    switch(action.type) {
        case 0:
            return state = [true, false, false, false, false];
        case 1:
            return state = [false, true, false, false, false];
        case 2:
            return state = [false, false, true, false, false];
        case 3:
            return state = [false, false, false, true, false];
        case 4:
            return state = [false, false, false, false, true];
        default:
            return state;
    }
}

export default windowReducer;