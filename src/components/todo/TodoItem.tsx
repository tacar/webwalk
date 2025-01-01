import React from 'react';
import { CheckCircle2, Circle, Pencil, Trash2 } from 'lucide-react';
import { Todo } from '../../types/todo';
import { Button } from '../ui/Button';
import { TodoItemEdit } from './TodoItemEdit';
import { useTodoItem } from '../../hooks/useTodoItem';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { isEditing, handleToggle, handleDelete, handleStartEdit } = useTodoItem(todo);

  if (isEditing) {
    return <TodoItemEdit todo={todo} />;
  }

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <button
          onClick={handleToggle}
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
        <Button variant="ghost" icon={Pencil} onClick={handleStartEdit} />
        <Button variant="ghost" icon={Trash2} onClick={handleDelete} className="text-red-600 hover:text-red-700" />
      </div>
    </div>
  );
};