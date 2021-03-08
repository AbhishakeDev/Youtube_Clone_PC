import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({ onFormSubmit }) => {
    const [searchItem, setSearchItem] = useState('');

    const handleChange = e => {
        setSearchItem(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        onFormSubmit(searchItem);
    }

    return (
        <Paper style={{ width: '60%', margin: 'auto' }}>
            <form style={{ padding: '5px 10px' }} onSubmit={handleSubmit}>
                <TextField fullWidth label="Search..." onChange={handleChange} />
            </form>
        </Paper>
    )
}

export default SearchBar
