import React from "react";
import ReactTable from "react-table";
import "../../../node_modules/react-table/react-table.css";
import { nameColumns } from "../../dictionary/NameColumns";

export default class FormTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: []
        };
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data !== prevState.data) {
            let arrayColumns = [];
            let Columns = [{
                Header: nextProps.subelement,
            }];

            Object.keys(nextProps.data[0]).map((currentValue) => {
                arrayColumns.push({
                    Header: nameColumns[currentValue],
                    accessor: currentValue
                });
            });

            Columns[0].columns = arrayColumns;

            return {
                data: nextProps.data,
                columns: Columns
            }
        }
        return null;
    }

    render() {
        const { columns, data } = this.state;

        return (
            <div>
                <ReactTable
                    columns={columns}
                    data={data}
                    defaultPageSize={15}
                    className="-striped -highlight"
                /> 
            </div>
        );
    }
}
