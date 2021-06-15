import { combineReducers } from 'redux';

import formPageContainerReducer from '../pages/TODOList/reducers';

const rootReducer = combineReducers({ formPageContainerReducer });

export default rootReducer;
