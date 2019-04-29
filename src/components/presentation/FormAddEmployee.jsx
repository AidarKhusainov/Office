import React from "react";
import PropTypes from 'prop-types';

const FormAddEmployee = ({onAddEmployee = (f) => f}) => {
    
    let numDep, numCab, fullName;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddEmployee(numDep.value, numCab.value, fullName.value);
        numDep.value = '';
        numCab.value = '';
        fullName.value = '';
    }
        
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='number' 
                ref={input => numDep = input}
                placeholder="number of department"
                required
            />
            <input 
                type='number' 
                ref={input => numCab = input}
                placeholder="number of cabinet"
                required
            />
            <input 
                type='text' 
                ref={input => fullName = input}
                placeholder="full name"
                required
            />
            <input 
                type='submit' 
                value="Add" 
            />
        </form>
    );
}

FormAddEmployee.propTypes = {
    onAddEmployee: PropTypes.func
}

export default FormAddEmployee;