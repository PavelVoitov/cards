
const initialState = {
    isLoggedIn: false
}


export const authReducer = (state: InitialStateType  = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'SET-IS-LOGGED-IN', value} as const)

// types
type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof setIsLoggedInAC>



