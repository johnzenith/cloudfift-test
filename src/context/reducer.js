/**
 * Actions
 */
export const actionTypes = {
    SET_USER: 'user',
};

export const initialState = {
    user: {email: 'john.zenith.me@gmail.com'},
    // user: null
};

/**
 * @param {object} state   Specifies the app registered states
 * @param {object} action  Specifies the current action to listen for
 * 
 * @see reducer()
 */
const actionPayloadHelper = (state, action) => {
    const type = action?.type;

    // Bail undefined actions
    if (typeof state?.[type] === 'undefined')
        return state;
    
    return {
        ...state,
        [type]: action?.payload?.[type] // [action][payload][type]
    };
};

const reducer = (state, action) => {
    return actionPayloadHelper(state, action);
};

export default reducer;