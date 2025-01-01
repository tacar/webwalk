import React from 'react';
import { TodoItem } from './TodoItem';
import { useTodo } from '../../context/TodoContext';

export const TodoList: React.FC = () => {
  const { todos } = useTodo();

  if (todos.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No todos yet. Add one to get started!
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};