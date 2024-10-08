import React, { useState } from 'react';

export default function CRUD() {
  const [data, setData] = useState([]);

  let apiUrl = "http://localhost:3001/students";

  function getAll() {
    fetch(apiUrl, { method: "GET", headers: { "Content-Type": "application/json" } })
      .then(res => res.json())
      .then(res => setData(res));
  }

  function getByID(rollno) {
    fetch(apiUrl + "/" + rollno, { method: "GET", "Content-Type": "application/json" })
      .then(res => res.json())
      .then(res => setData(res));

    console.log(data);
  }

  const formatedStudent = data.map((stu) => {
    return (
      <table border={2}>
        <tr>
          <td>{stu.rollno}</td>
          <td>{stu.name}</td>
          <td>{stu.age}</td>
          <td><button className='btn btn-outline-info' onClick={() => getByID(stu.rollno)} >Read more</button></td>
        </tr>
      </table>
    );
  });

  return (
    <>
      <button className='btn btn-primary' onClick={getAll}>Get All</button>

      <div className="">{formatedStudent}</div>
    </>
  )
}
