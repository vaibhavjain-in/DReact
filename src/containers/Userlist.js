import React, {Component} from "react";
import { render } from "react-dom";
import $ from 'jquery';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Userlist extends Component {
  state = {
    data: [],
    loaded: false
  }
  componentDidMount() {
    $.ajax({
      url: "http://localhost/light/docroot/admin/people/export",
      type: 'GET',
      headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM2NjIyNTQ1ODRmMGFmMjk3ZDZjZWUxMjcyYjJjMzA1YzdkYzQxMTZiZWI0YjM5MWVjNWZlNTBmNmZiNzUyYjMwMGQ5Y2RhNGM0ZmNhMTgwIn0.eyJhdWQiOiIyNzEwZmI2Mi00OWQ4LTQ0ZDYtYjRkYy1hZmVkMTIyNzAxNDQiLCJqdGkiOiJjNjYyMjU0NTg0ZjBhZjI5N2Q2Y2VlMTI3MmIyYzMwNWM3ZGM0MTE2YmViNGIzOTFlYzVmZTUwZjZmYjc1MmIzMDBkOWNkYTRjNGZjYTE4MCIsImlhdCI6MTUyNjYzNzU0NiwibmJmIjoxNTI2NjM3NTQ2LCJleHAiOjE1Mjc4NDcxNDQsInN1YiI6IjEiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCIsImFwaV91c2VyIl19.uEfj4MQEF9CdcZ8Y2PpGIAqIEUOyMahfJXNHdYCe89_6rsPJfeovf6iRJ_aTccWcep9X4-Tf6EbxiqcKVHrOPDuzlYCV4aQC_z1m5mDmz2esxS_5weSweKLsv_1FvKooNYsmMJgvrvvYburoYyE19gJEOdWfY_jc4Bsa4JYjRVjAFN-lxWzHD7itkpPehuwkulObup9P6us8xEcQaw7YnmL6G1NG-65gBtG1UeACSh2ye0fwLU63CHuiqPWFYLFWEimQkDrYulHvWgnNbkAHgeWdIUnLPaAwdAlY5-jN0vsN53nGrTfqIFyfie05jITZ3-4SDME0nnXDxePkuuePZQ"},
      error : function(err) {
        console.log('Error!', err)
      },
      success: function(data) {
        console.log(data);
        this.setState({ data: data });
      }.bind(this)
    });

  }
  render() {
    if (this.state.data) {
      const { data } = this.state;
      console.log(data);
      return (
        <div>
          <h2>User List</h2>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "Username",
                accessor: 'name'
              },
              {
                Header: "Status",
                accessor: 'status'
              },
              {
                Header: "Roles",
                accessor: 'roles_target_id',
                Cell: row => (
                  <div dangerouslySetInnerHTML={{__html: row.value}} />
                )
              },
              {
                Header: "Member for",
                accessor: 'created'
              },
              {
                Header: 'Last access',
                accessor: 'access'
              }
            ]}
            defaultPageSize={10}
            showPageSizeOptions={false}
            className="-striped -highlight"
          />
          <br />
        </div>
      );
    }
    else
      return (<p>Loading</p>);
  }
}
