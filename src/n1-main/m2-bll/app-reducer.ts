
const initialState = {
    app: {}
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP':
            return {...state}
        default:
            return state
    }
}

//actions
export const appAC = () => ({type: 'APP'} as const)

//types
type InitialStateType = {
    app: any
}
type ActionsType = ReturnType<typeof appAC>



