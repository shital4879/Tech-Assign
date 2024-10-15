import React from 'react';

const SearchFilter = ({ search, setSearch, option, setOption, sort, setSort }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mr-2"
      />
      <select
        value={option}
        onChange={(e) => setOption(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="p-2 border border-gray-300 rounded-md ml-2"
      >
        <option value="name">Sort by Name</option>
        <option value="age">Sort by Age</option>
        <option value="grade">Sort by Grade</option>
      </select>
    </div>
  );
};

export default SearchFilter;
