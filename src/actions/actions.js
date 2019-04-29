import fetch from 'isomorphic-fetch';

export const SELECT_SUBELEMENT = 'SELECT_SUBELEMENT';
export const REQUEST_TABLES = 'REQUEST_TABLES';
export const RECEIVE_TABLES = 'RECEIVE_TABLES';

export function selectSubelement(subelement) {
    return {
        type: SELECT_SUBELEMENT,
        subelement
    };
}

export function requestTables(subelement) {
    return {
        type: REQUEST_TABLES,
        subelement
    };
}


export function receiveTables(subelement, json) {
    return {
        type: RECEIVE_TABLES,
        subelement,
        tables: json.data,
        receiveAt: Date.now()
    };
}

export function fetchTables(subelement) {
    return (dispatch) => {
        dispatch(requestTables(subelement));
        return fetch(`http://localhost:1337/${subelement}`)
            .then(response => response.json())
            .then(json => {
                    dispatch(receiveTables(subelement, json))
                })
            .catch(err => console.error(err))
    }
}