import constants from "../actions/actionConstants";

const { GET_TRANSACTIONS_LIST, UPDATE_TRANSACTIONS_LIST } = constants;

export default (
    state = {
        loading: false,
        done: false,
        response: null,
        error: null,
        success: null,
    },
    action
) => {
    switch (action.type) {
        case `${GET_TRANSACTIONS_LIST}_PENDING`:
            return {
                ...state.transactionsList,
                loading: true,
                success: null
            }
        case `${GET_TRANSACTIONS_LIST}_FULFILLED`:
            return {
                ...state.transactionsList,
                loading: true,
                success: null,
                response: action.payload.result.transactions
            }
        case `${GET_TRANSACTIONS_LIST}_REJECTED`:
            return {
                ...state.transactionsList,
                loading: false,
                error: action.payload,
                success: false
            }
        case `${UPDATE_TRANSACTIONS_LIST}`:
            return {
                ...state.transactionsList,
                response: action.payload
            }
        default:
            return state
    }
}