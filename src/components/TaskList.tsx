import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import type { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  onStatusChange: (taskId: string, status: Task['status']) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">{task.title}</h3>
              <p className="mt-2 text-gray-600">{task.description}</p>
              <p className="mt-2 text-sm italic text-gray-500">
                Status:{' '}
                <select
                  value={task.status}
                  onChange={(e) =>
                    onStatusChange(task.id, e.target.value as Task['status'])
                  }
                  className="ml-2 rounded border-gray-300 text-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </p>
            </div>
            <div className="ml-4 flex space-x-2">
              <button
                onClick={() => onEdit(task)}
                className="rounded bg-[#3498db] p-2 text-white hover:bg-[#2980b9]"
              >
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="rounded bg-red-500 p-2 text-white hover:bg-red-600"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList