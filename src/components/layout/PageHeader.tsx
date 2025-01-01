import React from 'react';
import { CheckSquare } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  iconSize?: number;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  iconSize = 32,
  children 
}) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-2">
        <CheckSquare size={iconSize} className="text-blue-500" />
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      </div>
      {children}
    </div>
  );
};