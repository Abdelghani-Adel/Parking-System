import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-error mb-4">403</h1>
        <p className="text-lg text-customGray mb-6">Forbidden. You do not have access to this page.</p>
      </div>
    </div>
  );
};

export default Page;
