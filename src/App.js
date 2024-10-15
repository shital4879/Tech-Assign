import React, { useState, useEffect } from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';
import SearchFilter from './SearchFilter';
import './App.css';

const App = () => {
  const [student, setStudent] = useState([]);
  const [studentData, setStudentData] = useState({
    id: null,
    name: '',
    age: '',
    grade: 'A',
    enrollmentStatus: true,
  });
  const [update, setUpdate] = useState(false);
  const [search, setSearch] = useState('');
  const [option, setOption] = useState('all');
  const [sort, setSort] = useState('name');

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem('student')) || [];
    setStudent(storeData);
  }, []);

  useEffect(() => {
    localStorage.setItem('student', JSON.stringify(student));
  }, [student]);

  const inputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudentData({
      ...studentData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const submitBtn = (e) => {
    e.preventDefault();
    if (!studentData.name || !studentData.age) {
      alert('Please provide valid data');
      return;
    }
    if (update) {
      setStudent(
        student.map((student) =>
          student.id === studentData.id ? studentData : student
        )
      );
      setUpdate(false);
    } else {
      setStudent([...student, { ...studentData, id: Date.now() }]);
    }
    resetBtn();
  };

  const resetBtn = () => {
    setStudentData({
      id: null,
      name: '',
      age: '',
      grade: 'A',
      enrollmentStatus: true,
    });
  };


  const filteredData = student
    .filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((student) => {
      if (option === 'all') return true;
      return option === 'active'
        ? student.enrollmentStatus
        : !student.enrollmentStatus;
    })
    .sort((a, b) => {
      if (sort === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sort === 'age') {
        return a.age - b.age;
      } else if (sort === 'grade') {
        return a.grade.localeCompare(b.grade);
      }
      return 0;
    });
    
  const EditBtn = (student) => {
    setStudentData(student);
    setUpdate(true);
  };

  const deleteBtn = (id) => {
    setStudent(student.filter((student) => student.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto my-12 p-5 sm:p-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Student Record Management</h1>
      <StudentForm
        student={studentData}
        onChange={inputChange}
        onSubmit={submitBtn}
        update={update}
      />
      <SearchFilter
        search={search}
        setSearch={setSearch}
        option={option}
        setOption={setOption}
        sort={sort} 
        setSort={setSort} 
      />
      <StudentTable
        student={filteredData}
        onEdit={EditBtn}
        onDelete={deleteBtn}
      />
    </div>
  );
};

export default App;
