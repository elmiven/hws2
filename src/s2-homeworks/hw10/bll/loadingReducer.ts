const initState = {
    isLoading: false,
}

export type isLoadingType ={
    isLoading: boolean
}


export const loadingReducer = (state = initState, action: LoadingActionType ): isLoadingType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':
            let convert = !state.isLoading     
        return {...state, isLoading: convert} //пишет студент  // need to fix

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
