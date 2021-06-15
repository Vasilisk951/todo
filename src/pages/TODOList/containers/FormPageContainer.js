import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormPageLayout from '../components/FormPageLayout';
import {
    HANDLE_AREA_CHANGE,
    HANDLE_AREA_SUBMIT,
    REMOVE_TODO_ITEM,
    HANDLE_REMOVE_OPEN_MODAL,
    HANDLE_CLOSE_MODAL,
    EDIT_TODO_LIST_ITEM
} from '../actions';

import scrollTo from '../../../hooks/scrollUp';

const FormPageContainer = () => {

    const [data, setData] = useState(new Date().toLocaleTimeString());

    const dispatch = useDispatch();
    const TODOState = useSelector((state) => state.formPageContainerReducer);

    useEffect(() => {
        setInterval(() => {
            setData(new Date().toLocaleTimeString());
        }, 1000)
    }, [])

    const handleAreaChange = useCallback((event) => {
        dispatch(HANDLE_AREA_CHANGE(event));
    }, [dispatch]);

    const handleAreaSubmit = useCallback((event) => {
        event.preventDefault()
        dispatch(HANDLE_AREA_SUBMIT())
    }, [dispatch]);

    const handleRemoveOpenModal = useCallback((index) => {
        dispatch(HANDLE_REMOVE_OPEN_MODAL(index));
        scrollTo(0);
        document.body.style.overflow = "hidden";
    }, [dispatch]);

    const handleCloseModal = useCallback(() => {
        dispatch(HANDLE_CLOSE_MODAL());
        document.body.style.overflow = "visible";
    }, [dispatch]);

    const handleRemoveTODOListItem = useCallback(() => {
        dispatch(REMOVE_TODO_ITEM())
        document.body.style.overflow = "visible";
    }, [dispatch]);

    const handleEditTODOListItem = useCallback((index) => {
        dispatch(EDIT_TODO_LIST_ITEM(index))
        scrollTo(0);
    }, [dispatch]);

    return (
        <FormPageLayout
            areaValue={TODOState.initialState.areaValue}
            TODOItem={TODOState.initialState.TODOItem}
            TODOList={TODOState.initialState.TODOList}
            TODORemove={TODOState.initialState.TODORemove}
            handleAreaChange={handleAreaChange}
            handleAreaSubmit={handleAreaSubmit}
            removeTODOItem={handleRemoveTODOListItem}
            editTODOListItem={handleEditTODOListItem}
            handleRemoveOpenModal={handleRemoveOpenModal}
            handleCloseModal={handleCloseModal}
            data={data}
        />
    )

};

export default React.memo(FormPageContainer);