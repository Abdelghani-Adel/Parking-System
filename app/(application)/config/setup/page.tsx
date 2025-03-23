import React from "react";

const Page = () => {
  return (
    <div className="p-4">
      <form action="" className="max-w-3xl m-auto">
        <div className="mb-5">
          <label htmlFor="username">Parking Name</label>
          <input
            type="text"
            placeholder="Enter parking name"
            className="w-full py-2 px-2 text-sm text-grey-darker font-normal pr-8 border rounded-md focus:outline-none border-accent-light focus:ring-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="username">Currency</label>
          <input
            type="text"
            placeholder="Enter currency"
            className="w-full py-2 px-2 text-sm text-grey-darker font-normal pr-8 border rounded-md focus:outline-none border-accent-light focus:ring-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Page;
