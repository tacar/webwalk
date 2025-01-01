import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  icon?: LucideIcon;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500',
    danger: 'text-white bg-red-500 hover:bg-red-600 focus:ring-red-500',
    ghost: 'text-gray-600 hover:text-gray-800 hover:bg-gray-100',
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {Icon && <Icon size={20} />}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};