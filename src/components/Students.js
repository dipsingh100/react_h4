import React, { useState } from "react";
import "../css/students.css";
import { Link } from "react-router-dom";

const Students = () => {
  const items = [
    { name: "John", age: 26, course: "MERN", batch: "October" },
    { name: "Doe", age: 25, course: "MERN", batch: "November" },
    { name: "Biden", age: 26, course: "MERN", batch: "September" },
    { name: "Barar", age: 22, course: "MERN", batch: "September" },
    { name: "Chirst", age: 23, course: "MERN", batch: "October" },
    { name: "Elent", age: 24, course: "MERN", batch: "November" },
    { name: "Harshita Sharma", age: 24, course: "MERN", batch: "October" },
  ];
  const [data] = useState(items);

  return (
    <>
      <div className="container">
        <div className="title-cont">
          <h1>Students Details</h1>
          <button className="add-new-st">
            Add new student
          </button>
        </div>
        <div className="table-cont">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.course}</td>
                    <td>{item.batch}</td>
                    <td>
                      <Link>Edit</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Students;
