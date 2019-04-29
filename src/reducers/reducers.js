import { combineReducers } from 'redux';
import { SELECT_SUBELEMENT, RECEIVE_TABLES, REQUEST_TABLES } from '../actions/actions';

// TODO: можно доделать действие обновить и получить

function selectSubelement(state = 'employee', action) {
    switch (action.type) {
        case SELECT_SUBELEMENT:
            return action.subelement;
        default:
            return state;
    }
}

function tables(state = { 
        isFetching: false, 
        didInvalidate: false, 
        items: [] 
    }, action) {
console.log(state);
    switch (action.type) {
        case REQUEST_TABLES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_TABLES:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.tables,
                lastUpdate: action.receiveAt
            })
        default:
            return state
    }
}

function tablesBySubelement(state = {}, action) {
console.log(state);
    switch (action.type) {
        case REQUEST_TABLES:
        case RECEIVE_TABLES:
            return Object.assign({}, state, {
                [action.subelement]: tables(state[action.subelement], action)
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    tablesBySubelement,
    selectSubelement
})

export default rootReducer