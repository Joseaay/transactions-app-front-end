import { createAsyncAction } from 'redux-promise-middleware-actions';
import constants from "./actionConstants";
import config from '../../config'
const { GET_TRANSACTIONS_LIST, UPDATE_TRANSACTIONS_LIST } = constants;

/**
 * 	Action to fetch thre transactions list
 *
 * 	@method GET
 */
export const getTransactionsList =
    createAsyncAction(GET_TRANSACTIONS_LIST, () => (
        fetch(config.api.baseUrl)
            .then((response) => response.json())
    ));

/**
 * 	Updates the current transactions list
 *
 *  @param     {Object[]} updatedTransactionList 
 */
export const updateTransactionsList = (updatedTransactionList) => {
    return {
        type: UPDATE_TRANSACTIONS_LIST,
        payload: updatedTransactionList
    }
}
