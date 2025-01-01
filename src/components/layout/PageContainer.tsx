import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <div className="max-w-2xl mx-auto p-6">
        {children}
      </div>
    </div>
  );
};