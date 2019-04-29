import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { selectSubelement, fetchTables } from "../../actions/actions";
import Picker from "../presentation/Picker";
import FormTable from '../presentation/FormTable';
import FormAddEmployee from '../presentation/FormAddEmployee';
import FormAddTask from '../presentation/FormAddTask';

class AsyncApp extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.addTask = this.addTask.bind(this);
    }
    
    state = {
        selectSubelement: 'employee'
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.selectSubelement !== prevState.selectSubelement) {
            nextProps.dispatch(fetchTables(nextProps.selectSubelement))
            console.log(nextProps);
            console.log(prevState);
            return {
                selectSubelement: nextProps.selectSubelement
            }
        }
        return null;
    }
    
    componentDidMount() {
        this.props.dispatch(fetchTables(this.state.selectSubelement));
    }
        
    addEmployee(numDep, numCab, fullName) {
        const { dispatch, selectSubelement } = this.props;

        fullName = fullName.replace(/\s/g, '%20');
        
        dispatch(fetchTables(`employee/add?num_employee=NULL&num_dep=${numDep}&num_cab=${numCab}&full_name=${fullName}`));

        dispatch(fetchTables(selectSubelement));
    }

    addTask(num_project, num_employee, share, start_date_task, end_date_task) {
        const { dispatch, selectSubelement } = this.props;
        
        dispatch(fetchTables(`task/add?num_task=NULL&num_project=${num_project}&num_employee=${num_employee}&share=${share}&start_date_task=${start_date_task}&end_date_task=${end_date_task}`));

        dispatch(fetchTables(selectSubelement));
    }
    
    handleChange(nextSubelement) {
        console.log(nextSubelement);
        this.props.dispatch(selectSubelement(nextSubelement));
    }
    
    render() {
        const { tables, isFetching } = this.props;
        const { selectSubelement } = this.state;
        console.log(this.state);
        console.log(this.props);
        return ( 
            <div>
                <h3>Список таблиц</h3>
                    <Picker value = {selectSubelement}
                        onChange = {this.handleChange}
                        options = {[
                            'employee', 
                            'department', 
                            'cabinet', 
                            'task', 
                            'project', 
                            'phone', 
                            'employee_share',
                            'task_employee_id_date',
                            'project_employee_task'
                        ]}
                    />
                <h3>Добавить сотрудника</h3>
                <FormAddEmployee onAddEmployee={this.addEmployee}/>
                <br/>
                <h3>Добавить задачу</h3>
                <FormAddTask onAddTask={this.addTask}/>
                <br/>
                {isFetching && tables.length === 0 && <h2> Loading... </h2>}
                {!isFetching && tables.length === 0 && <h2> Empty. </h2>}
                {tables.length > 0 && <div><FormTable data={tables} subelement={selectSubelement}/></div>}
            </div>
        )
    }
}

AsyncApp.propTypes = {
    selectSubelement: PropTypes.string.isRequired,
    tables: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { selectSubelement, tablesBySubelement } = state;
    const { 
        isFetching,
        lastUpdated,
        items: tables 
    } = tablesBySubelement[selectSubelement] || { 
        isFetching: true,
        items: [] }
    return {
        selectSubelement,
        tables,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(AsyncApp)