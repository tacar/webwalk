import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  return (
    <PageContainer className="bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="text-center space-y-6 mt-16">
        <PageHeader title="Todo App" iconSize={40} />
        <p className="text-gray-600 text-lg">
          A simple and elegant way to manage your daily tasks
        </p>
        <Button to="/todos" icon={ArrowRight}>
          Get Started
        </Button>
      </div>
    </PageContainer>
  );
};