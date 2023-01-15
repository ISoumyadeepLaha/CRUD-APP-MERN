import React from "react";

const AddUser = () => {
  
  return (
    <div className="bg-[#CAD5E2] container mx-auto w-[40%] mt-4 p-4 rounded-xl">
      <h3 className="text-center text-3xl font-bold underline">Add Users</h3>
      <form action="" className="flex flex-col  mt-4">
        <label htmlFor="name" className="text-xl">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="mt-2 p-2 outline-none"
          id="name"
        />
        <label htmlFor="email" className="text-xl">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="mt-2 p-2 outline-none"
          id="email"
        />
        <label htmlFor="phone" className="text-xl">
          Phone
        </label>
        <input
          type="number"
          name="phone"
          className="mt-2 p-2 outline-none"
          id="phone"
        />
        <label htmlFor="salary" className="text-xl">
          Salary
        </label>
        <input
          type="number"
          name="salary"
          className="mt-2 p-2 outline-none"
          id="salary"
        />
        <label htmlFor="address" className="text-xl">
          Address
        </label>
        <input
          type="text"
          name="address"
          className="mt-2 p-2 outline-none"
          id="address"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white mt-4 w-40 mx-auto p-2 text-xl rounded-md"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
