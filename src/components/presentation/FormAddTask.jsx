import React from "react";
import PropTypes from 'prop-types';

const FormAddTask = ({onAddTask = (f) => f}) => {
    
    let numProject, numEmployee, share, startDate, endDate;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(numProject.value, numEmployee.value, share.value, startDate.value, endDate.value);
        numProject.value = '';
        numEmployee.value = '';
        share.value = '';
        startDate.value = '';
        endDate.value = '';
    }
        
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='number' 
                ref={input => numProject = input}
                placeholder="number of project"
                required
            />
            <input 
                type='number' 
                ref={input => numEmployee = input}
                placeholder="number of employee"
                required
            />
            <input 
                type='text' 
                ref={input => share = input}
                placeholder="share"
                required
            />
            <input 
                type='text' 
                ref={input => startDate = input}
                placeholder="start date (YYYY-MM-DD)"
                required
            />
            <input 
                type='text' 
                ref={input => endDate = input}
                placeholder="end date (YYYY-MM-DD)"
                required
            />
            <input 
                type='submit' 
                value="Add" 
            />
        </form>
    );
}

FormAddTask.propTypes = {
    onAddTask: PropTypes.func
}

export default FormAddTask;