import React from 'react';

const StudentRow = ({ student, onEdit, onDelete }) => {
  return (
    <tr className="border-t">
      <td className="px-4 py-2">{student.id}</td>
      <td className="px-4 py-2">{student.name}</td>
      <td className="px-4 py-2">{student.age}</td>
      <td className="px-4 py-2">{student.grade}</td>
      <td className="px-4 py-2">{student.enrollmentStatus ? 'Active' : 'Inactive'}</td>
      <td className="px-4 py-2">
        <button
          onClick={() => onEdit(student)}
          className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(student.id)}
          className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default StudentRow;
