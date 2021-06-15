import React from 'react';
import { Button, TextField, Box } from '@material-ui/core';

import './index.css';

const FormPageLayout = ({
    areaValue,
    TODOItem,
    handleAreaChange,
    handleAreaSubmit,
    TODOList,
    removeTODOItem,
    editTODOListItem,
    TODORemove,
    handleRemoveOpenModal,
    handleCloseModal,
    data }) => {

    return (
        <Box>
            <Box className='time'>{data}</Box>
            <Box className='todoList' >
                <form className='todoList__form' onSubmit={handleAreaSubmit}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Todo List"
                        multiline
                        rows={4}
                        value={areaValue}
                        onChange={(event) => handleAreaChange(event)}
                        variant="outlined"
                        autoFocus={true}
                    />
                    <Button type='submit' variant="contained" color='primary' disabled={!areaValue}>{TODOItem.TODOValue ? 'edit' : 'add'}</Button>
                </form>
                <Box className='todoList__components'>
                    {TODOList.map((item, index) => (
                        <Box key={index} className='todoList__item'>
                            <Box>
                                <Button variant="contained" color='primary' onClick={() => editTODOListItem(index)}>&#128395;</Button>
                                <Button variant="contained" color='secondary' onClick={() => handleRemoveOpenModal(index)}>&#10060;</Button>
                            </Box>
                            <Box>{item}</Box>
                        </Box>
                    ))}
                </Box>
                <Box className={TODORemove.className}>
                    <Box className='modal__fon' onClick={handleCloseModal}></Box>
                    <Box className='modal__content'>
                        <Box component='p'>Do you really want to delete the entry</Box>
                        <Button variant="contained" color='primary' onClick={removeTODOItem}>yes</Button>
                        <Button variant="contained" color='secondary' onClick={handleCloseModal}>no</Button>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
};

export default FormPageLayout;