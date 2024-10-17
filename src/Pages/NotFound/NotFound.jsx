import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4">Page Not Found</p>
      <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
    </div>
  );
};

export default NotFound;
