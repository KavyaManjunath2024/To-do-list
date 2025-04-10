import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { Task, TaskFormData } from '../types';
import Modal from '../components/Modal';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>();

  const handleAddTask = (data: TaskFormData) => {
    const newTask: Task = {
      id: Date.now().toString(),
      ...data,
    };
    setTasks([...tasks, newTask]);
    setIsAddModalOpen(false);
  };

  const handleEditTask = (data: TaskFormData) => {
    if (!editingTask) return;
    const updatedTasks = tasks.map((task) =>
      task.id === editingTask.id ? { ...task, ...data } : task
    );
    setTasks(updatedTasks);
    setIsEditModalOpen(false);
    setEditingTask(undefined);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleStatusChange = (taskId: string, status: Task['status']) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center rounded bg-[#3498db] px-4 py-2 text-white hover:bg-[#2980b9]"
        >
          <Plus size={20} className="mr-2" />
          Add Task
        </button>
      </div>

      <TaskList
        tasks={tasks}
        onEdit={(task) => {
          setEditingTask(task);
          setIsEditModalOpen(true);
        }}
        onDelete={handleDeleteTask}
        onStatusChange={handleStatusChange}
      />

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
        <h2 className="mb-4 text-xl font-bold">Add New Task</h2>
        <TaskForm
          onSubmit={handleAddTask}
          onCancel={() => setIsAddModalOpen(false)}
        />
      </Modal>

      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <h2 className="mb-4 text-xl font-bold">Edit Task</h2>
        <TaskForm
          initialData={editingTask}
          onSubmit={handleEditTask}
          onCancel={() => setIsEditModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Tasks;