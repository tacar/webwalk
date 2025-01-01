import { useState } from 'react';
import { Todo } from '../types/todo';
import { useTodo } from '../context/TodoContext';
import { useTodoItem } from './useTodoItem';

export const useTodoItemEdit = (todo: Todo) => {
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const { editTodo } = useTodo();
  const { handleStopEdit } = useTodoItem(todo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const handleSave = () => {
    if (editedTitle.trim()) {
      editTodo(todo.id, editedTitle);
      handleStopEdit();
    }
  };

  const handleCancel = () => {
    setEditedTitle(todo.title);
    handleStopEdit();
  };

  return {
    editedTitle,
    handleChange,
    handleSave,
    handleCancel,
  };
};