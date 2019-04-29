import { createStore, applyMiddleware, compose  } from 'redux';
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from '../reducers/reducers';
// import * as middleware from '../middleware/middlewares';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        )
    );
};
