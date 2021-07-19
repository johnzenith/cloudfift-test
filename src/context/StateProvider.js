import React, { 
    createContext,
    useContext,
    useReducer
} from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateValue = () => {
    const [state, dispatch] = useContext(StateContext);

    const reducer = React.useMemo(() => {
        return [state, dispatch];
    }, [state, dispatch]);
    
    return reducer;
};