var selects = {
    "SELECT_ALL_EMPLOYEE":
        `SELECT 
            num_employee, full_name, num_dep, num_cab 
        FROM 
            employee
        ORDER BY employee.full_name ASC
        `,
    "SELECT_ALL_DEPARTMENT":
        `SELECT 
            num_dep, num_employee as num_manager, name_dep
        FROM 
            department
        `,
    "SELECT_ALL_CABINET":
        `SELECT 
            num_cab, square
        FROM 
            cabinet
        `,
    "SELECT_ALL_TASK":
        `SELECT 
            num_task, num_project, num_employee, share, start_date_task, end_date_task
        FROM 
            task
        `,
    "SELECT_ALL_PROJECT":
        `SELECT 
            num_project, num_dep, name_project, start_date, end_date, budget
        FROM 
            project
        `,
    "SELECT_ALL_PHONE":
        `SELECT 
            num_phone, num_cab
        FROM 
            phone
        `,
    "SELECT_EMPLOYEE_SHARE":
        `SELECT 
            employee.full_name, project.name_project, num_task, task.share
        FROM task JOIN project 
            ON task.num_project=project.num_project
        JOIN employee 
            ON employee.num_employee=task.num_employee 
        AND 
            employee.full_name='Dmitriev Dima Dmitrievich'
        HAVING 
            task.share > 20000
        `,
    "SELECT_TASK_ID_DATE":
        `SELECT 
            project.name_project, task.num_task, employee.full_name, task.end_date_task
        FROM task JOIN project 
            ON project.num_project = task.num_project
        JOIN employee 
            ON employee.num_employee=task.num_employee
        AND 
            employee.num_employee = 10 
        AND 
            task.start_date_task = '2019-01-10'
        `,
    "SELECT_PROJECT_EMPLOYEE_TASK":
    `SELECT 
        name_project, employee.full_name, task.num_task 
    FROM project JOIN task 
        ON project.num_project=task.num_project
    JOIN employee 
        ON employee.num_employee=task.num_employee
    WHERE employee.num_employee=9
    `
};

module.exports = { selects };