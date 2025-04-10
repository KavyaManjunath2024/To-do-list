import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Task Manager</h1>
      <p className="text-gray-600">
        This is a simple task management application that helps you organize and track your tasks.
        Use the navigation menu to access different sections of the application.
      </p>
    </div>
  );
};

export default Home;