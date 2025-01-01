import React from 'react';
import { Home as HomeIcon } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { AddTodo } from '../components/todo/AddTodo';
import { TodoList } from '../components/todo/TodoList';

export const Todos: React.FC = () => {
  return (
    <PageContainer className="bg-gray-50">
      <PageHeader title="My Todos">
        <Button to="/" variant="ghost" icon={HomeIcon}>
          Home
        </Button>
      </PageHeader>
      <AddTodo />
      <div className="mt-8">
        <TodoList />
      </div>
    </PageContainer>
  );
};