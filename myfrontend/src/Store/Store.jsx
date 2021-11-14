import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { 
    employeeReducer,
    employeeDetailReducer, 
    updateEmployeeReducer
} from "../Reducer/EmployeeReducer.jsx";

const reducer = combineReducers({
    employeeAll:employeeReducer,
    employeeID: employeeDetailReducer,
    updateEmployee: updateEmployeeReducer
});

let initialState = {};

const middleware = [thunk];


const store = createStore(
    reducer,
    initialState,
    // For Development
    composeWithDevTools(applyMiddleware(...middleware)), 
    // For Production
    // applyMiddleware(...middleware)

);

export default store;