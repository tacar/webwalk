import { useState } from 'react';
import { Todo } from '../types/todo';
import { useTodo } from '../context/TodoContext';

export const useTodoItem = (todo: Todo) => {
  const [isEditing, setIsEditing] = useState(false);
  const { toggleTodo, deleteTodo } = useTodo();

  const handleToggle = () => toggleTodo(todo.id);
  const handleDelete = () => deleteTodo(todo.id);
  const handleStartEdit = () => setIsEditing(true);
  const handleStopEdit = () => setIsEditing(false);

  return {
    isEditing,
    handleToggle,
    handleDelete,
    handleStartEdit,
    handleStopEdit,
  };
};