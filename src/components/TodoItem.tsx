import React, { useState } from 'react';
import { CheckCircle2, Circle, Pencil, Trash2, X, Check } from 'lucide-react';
import { Todo } from '../types/todo';
import { useTodo } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEdit = () => {
    if (editedTitle.trim()) {
      editTodo(todo.id, editedTitle);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {isEditing ? (
        <div className="flex items-center flex-1 gap-2">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="flex-1 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            onClick={handleEdit}
            className="p-1 text-green-600 hover:text-green-700"
          >
            <Check size={20} />
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
              setEditedTitle(todo.title);
            }}
            className="p-1 text-red-600 hover:text-red-700"
          >
            <X size={20} />
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`${
                todo.completed ? 'text-green-500' : 'text-gray-400'
              } hover:text-green-600 transition-colors`}
            >
              {todo.completed ? <CheckCircle2 size={20} /> : <Circle size={20} />}
            </button>
            <span
              className={`${
                todo.completed ? 'line-through text-gray-500' : 'text-gray-700'
              }`}
            >
              {todo.title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 text-blue-600 hover:text-blue-700"
            >
              <Pencil size={18} />
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-1 text-red-600 hover:text-red-700"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};