import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
    areaValue: '',
    TODOList: [],
    TODOItem: {
        TODOValue: '',
        index: '',
    },
    TODORemove: {
        className: 'modal',
        index: NaN,
    }
};

const formPageContainerReducer = handleActions({
    [actions.HANDLE_AREA_CHANGE]: (state, event) => {
        const stateCopy = state;
        stateCopy.initialState.areaValue = event.payload.target.value;
        return {
            ...state,
            stateCopy
        };
    },
    [actions.HANDLE_AREA_SUBMIT]: (state) => {

        if (state.initialState.TODOItem.TODOValue) {
            const stateCopy = state;
            stateCopy.initialState.TODOList[stateCopy.initialState.TODOItem.index] = stateCopy.initialState.areaValue;
            stateCopy.initialState.TODOItem.TODOValue = '';
            stateCopy.initialState.TODOItem.index = '';
            stateCopy.initialState.areaValue = '';
            return {
                ...state,
                stateCopy
            }
        } else {
            const stateCopy = state;
            if (stateCopy.initialState.areaValue !== '') {
                stateCopy.initialState.TODOList.push(stateCopy.initialState.areaValue);
                stateCopy.initialState.areaValue = '';
                return {
                    ...state,
                    stateCopy
                };
            }
            return {
                ...state,
                stateCopy
            };

        }
    },
    [actions.HANDLE_REMOVE_OPEN_MODAL]: (state, index) => {
        const stateCopy = state;
        stateCopy.initialState.TODORemove.className = 'modal modal-active'
        stateCopy.initialState.TODORemove.index = index.payload;
        return {
            ...state,
            stateCopy
        }
    },
    [actions.HANDLE_CLOSE_MODAL]: (state) => {
        const stateCopy = state;
        stateCopy.initialState.TODORemove.className = 'modal';
        stateCopy.initialState.TODORemove.index = NaN;
        return {
            ...state,
            stateCopy
        }
    },
    [actions.REMOVE_TODO_ITEM]: (state) => {
        const stateCopy = state;
        stateCopy.initialState.TODOList.splice(stateCopy.initialState.TODORemove.index, 1);
        stateCopy.initialState.TODORemove.className = 'modal';
        stateCopy.initialState.TODORemove.index = NaN;
        return {
            ...state,
            stateCopy
        };
    },
    [actions.EDIT_TODO_LIST_ITEM]: (state, index) => {
        const stateCopy = state;
        stateCopy.initialState.TODOItem.TODOValue = stateCopy.initialState.TODOList[index.payload];
        stateCopy.initialState.TODOItem.index = index.payload;
        stateCopy.initialState.areaValue = stateCopy.initialState.TODOItem.TODOValue;

        return {
            ...state,
            stateCopy
        };
    }


}, { initialState })

export default formPageContainerReducer;