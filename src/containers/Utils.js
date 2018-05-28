import React from "react";
import namor from "namor";
import $ from 'jquery';
import "./Sessionlist.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33 ? "complicated" : "single"
  };
};

export function getData() {
  $.ajax({
    url: "http://localhost/light/docroot/jsonapi/node/page",
    type: 'GET',
    headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM2NjIyNTQ1ODRmMGFmMjk3ZDZjZWUxMjcyYjJjMzA1YzdkYzQxMTZiZWI0YjM5MWVjNWZlNTBmNmZiNzUyYjMwMGQ5Y2RhNGM0ZmNhMTgwIn0.eyJhdWQiOiIyNzEwZmI2Mi00OWQ4LTQ0ZDYtYjRkYy1hZmVkMTIyNzAxNDQiLCJqdGkiOiJjNjYyMjU0NTg0ZjBhZjI5N2Q2Y2VlMTI3MmIyYzMwNWM3ZGM0MTE2YmViNGIzOTFlYzVmZTUwZjZmYjc1MmIzMDBkOWNkYTRjNGZjYTE4MCIsImlhdCI6MTUyNjYzNzU0NiwibmJmIjoxNTI2NjM3NTQ2LCJleHAiOjE1Mjc4NDcxNDQsInN1YiI6IjEiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCIsImFwaV91c2VyIl19.uEfj4MQEF9CdcZ8Y2PpGIAqIEUOyMahfJXNHdYCe89_6rsPJfeovf6iRJ_aTccWcep9X4-Tf6EbxiqcKVHrOPDuzlYCV4aQC_z1m5mDmz2esxS_5weSweKLsv_1FvKooNYsmMJgvrvvYburoYyE19gJEOdWfY_jc4Bsa4JYjRVjAFN-lxWzHD7itkpPehuwkulObup9P6us8xEcQaw7YnmL6G1NG-65gBtG1UeACSh2ye0fwLU63CHuiqPWFYLFWEimQkDrYulHvWgnNbkAHgeWdIUnLPaAwdAlY5-jN0vsN53nGrTfqIFyfie05jITZ3-4SDME0nnXDxePkuuePZQ"},
    error : function(err) {
      console.log('Error!', err)
    },
    success: function(data) {
      console.log(data.data);
      return data.data;
    }
  });

}
