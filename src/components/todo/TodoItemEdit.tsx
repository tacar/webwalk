import React from 'react';
import { Check, X } from 'lucide-react';
import { Todo } from '../../types/todo';
import { Button } from '../ui/Button';
import { useTodoItemEdit } from '../../hooks/useTodoItemEdit';

interface TodoItemEditProps {
  todo: Todo;
}

export const TodoItemEdit: React.FC<TodoItemEditProps> = ({ todo }) => {
  const { editedTitle, handleChange, handleSave, handleCancel } = useTodoItemEdit(todo);

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
      <input
        type="text"
        value={editedTitle}
        onChange={handleChange}
        className="flex-1 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
        autoFocus
      />
      <div className="flex gap-2">
        <Button variant="ghost" icon={Check} onClick={handleSave} className="text-green-600 hover:text-green-700" />
        <Button variant="ghost" icon={X} onClick={handleCancel} className="text-red-600 hover:text-red-700" />
      </div>
    </div>
  );
};