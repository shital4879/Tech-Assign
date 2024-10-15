import React from 'react';

const StudentTable = ({ student, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Age</th>
          <th className="border p-2">Grade</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {student.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center p-4">No students found.</td>
          </tr>
        ) : (
          student.map((student) => (
            <tr key={student.id}>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.age}</td>
              <td className="border p-2">{student.grade}</td>
              <td className="border p-2">{student.enrollmentStatus ? 'Active' : 'Inactive'}</td>
              <td className="border p-2">
                <button
                  onClick={() => onEdit(student)}
                  className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(student.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default StudentTable;
