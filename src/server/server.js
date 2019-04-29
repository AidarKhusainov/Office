var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var queries = require('./queries');

var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'office'
});

connection.connect((error) => {
    if(error){
        return error;
    } else {
        console.log('Connected');
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('go /employee');
});

app.get('/employee', (req, res) => {
    connection.query(queries.selects.SELECT_ALL_EMPLOYEE, (error, rows, fields) => {
        if (error) return res.send(error); 
        else {
            console.log('Successful query\n');
            return res.json({
                data: rows
            });
        }
    });
});

app.get('/department', (req, res) => {
    connection.query(queries.selects.SELECT_ALL_DEPARTMENT, (error, rows, fields) => {
        if (error) return res.send(error); 
        else {
            console.log('Successful query\n');
            return res.json({
                data: rows
            });
        }
    });
});

app.get('/cabinet', (req, res) => {
    connection.query(queries.selects.SELECT_ALL_CABINET, (error, rows, fields) => {
        if (error) return res.send(error); 
        else {
            console.log('Successful query\n');
            return res.json({
                data: rows
            });
        }
    });
});

app.get('/task', (req, res) => {
    connection.query(queries.selects.SELECT_ALL_TASK, (error, rows, fields) => {
        if (error) return res.send(error); 
        else {
            console.log('Successful query\n');
            return res.json({
                data: rows
            });
        }
    });
});

app.get('/project', (req, res) => {
    connection.query(queries.selects.SELECT_ALL_PROJECT, (error, rows, fields) => {
        if (error) return res.send(error); 
        else {
            console.log('Successful query\n');
            return res.json({
                data: rows
            });
        }
    });
});

app.get('/phone', (req, res) => {
    connection.query(queries.selects.SELECT_ALL_PHONE, (error, rows, fields) => {
        if (error) return res.send(error); 
        else {
            console.log('Successful query\n');
            return res.json({
                data: rows
            });
        }
    });
});

app.get('/employee_share', (req, res) => {
    connection.query(queries.selects.SELECT_EMPLOYEE_SHARE, (error, rows, fields) => {
        if (error) return res.send(error); 
        else {
            console.log('Successful query\n');
            return res.json({
                data: rows
            });
        }
    });
});

app.get('/task_employee_id_date', (req, res) => {
    connection.query(queries.selects.SELECT_TASK_ID_DATE, (error, rows, fields) => {
        if (error) return res.send(error); 
        else {
            console.log('Successful query\n');
            return res.json({
                data: rows
            });
        }
    });
});

app.get('/project_employee_task', (req, res) => {
    connection.query(queries.selects.SELECT_PROJECT_EMPLOYEE_TASK, (error, rows, fields) => {
        if (error) return res.send(error); 
        else {
            console.log('Successful query\n');
            return res.json({
                data: rows
            });
        }
    });
});

app.get('/employee/add', (req, res) => {
    var { num_employee, num_dep, num_cab, full_name } = req.query;
    var INSERT_INTO_EMPLOYEE = `INSERT INTO 
                                    Employee (num_employee, num_dep, num_cab, full_name) 
                                VALUES 
                                    (NULL, ${num_dep}, ${num_cab}, '${full_name}')
                            `;
    connection.query(INSERT_INTO_EMPLOYEE, (error, rows) => {
        if(error) {
            return res.json({
                OK: 400
            });
        } else {
            return res.json({
                OK: 200
            });
        }
    })
});

app.get('/task/add', (req, res) => {
    var { num_task, num_project, num_employee, share, start_date_task, end_date_task } = req.query;
    var INSERT_INTO_TASK= `INSERT INTO 
                                    task (num_task, num_project, num_employee, share, start_date_task, end_date_task) 
                                VALUES 
                                    (NULL, '${num_project}', '${num_employee}', ${share}, '${start_date_task}', '${end_date_task}')
                            `;
    connection.query(INSERT_INTO_TASK, (error, rows) => {
        if(error) {
            console.error(error);
            
            return res.json({
                OK: 400
            });
        } else {
            return res.json({
                OK: 200
            });
        }
    })
});

app.listen(1337, () => {
    console.log('server listening on port 1337');
});

