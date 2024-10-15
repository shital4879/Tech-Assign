import React from 'react';

const StudentForm = ({ student, onChange, onSubmit, update }) => {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={student.name}
          onChange={onChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={student.age}
          onChange={onChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="grade">Grade</label>
        <select
          name="grade"
          id="grade"
          value={student.grade}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="enrollmentStatus"
            checked={student.enrollmentStatus}
            onChange={onChange}
            className="mr-2"
          />
          Enrolled
        </label>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        {update ? 'Update Student' : 'Add Student'}
      </button>
    </form>
  );
};

export default StudentForm;

