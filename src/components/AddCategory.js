import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories}) => {

    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log('submit hecho')
        if(inputValue.trim()) {
            setCategories(cate => [inputValue,...cate,] )
            setInputValue('') 
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
            <p>{inputValue}</p>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
