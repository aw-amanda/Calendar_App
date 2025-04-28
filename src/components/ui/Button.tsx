import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'default' | 'lg' | 'icon';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'default', ...props }, ref) => {
    const baseClasses = 'section-border font-medium transition-colors cursor-pointer disabled:opacity-50';
    
    const variantClasses = {
      primary: 'primary-color txt-color hover:secondary-color hover:select-color',
      secondary: 'secondary-color txt-color hover:primary-color hover:select-color',
      danger: 'bg-red-500 hover:bg-red-600 text-white',
    };
    
    const sizeClasses = {
      sm: 'h-8 px-2 text-xs',
      default: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-8 text-base',
      icon: 'h-10 w-10',
    };

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';