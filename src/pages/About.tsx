import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Task Manager</h1>
      <p className="text-gray-600 mb-4">
        Task Manager is a simple yet powerful application designed to help you manage your tasks effectively.
        Built with React and modern web technologies, it provides an intuitive interface for creating,
        updating, and tracking your tasks.
      </p>
      <h2 className="text-xl font-semibold mb-2">Features</h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>Create and manage tasks</li>
        <li>Track task status</li>
        <li>Organize tasks by status</li>
        <li>Responsive design for all devices</li>
      </ul>
    </div>
  );
};

export default About;